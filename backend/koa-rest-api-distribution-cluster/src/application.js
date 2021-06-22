import Koa from 'koa';
import body from 'koa-body';
import fetch from 'node-fetch';

import {
  sleep,
} from '~/util/cluster';

import Mailbox from '~/class/Mailbox';

const application = new Koa();

application.use(body());

let currentMessage = null;
let currentResult = null;

var replys = [];
var acceptReply = true;

const nodes = [
  { host: 'localhost', port: '2301' },
  { host: '192.168.1.9', port: '2301' },
];

const mailbox = new Mailbox();

global.setInterval(() => {
  if (mailbox.count() !== 0 && currentResult === null) {
    const message = mailbox.take();
    currentMessage = message;

    nodes.forEach((node) => {
      const { host, port } = node;
      const message = currentMessage;
      fetch('http://' + host + ':' + port + '/distribution/node/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
    });
  }
}, 50);

application.use(async (ctx) => {
  switch (ctx.method) {
    case 'GET': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/api\/users$/))): {
          const { path, request: { body, } } = ctx;
          const timestamp = new Date().getTime();
          const request = { method: 'GET', path, body, };
          const message = { timestamp, request };
          mailbox.put(message);

          while (true) {
            if (currentResult !== null) {
              ctx.body = JSON.stringify(currentResult);
              currentResult = null;
              return;
            } else {
              await sleep(50);
            }
          }
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/api\/users\/([0-9a-zA-Z]+)$/))): {
          const { path, request: { body, } } = ctx;
          const timestamp = new Date().getTime();
          const request = new Request({ method: 'GET', path, body, });
          const message = { timestamp, request };
          mailbox.put(message);

          while (true) {
            if (currentResult !== null) {
              ctx.body = JSON.stringify(currentResult);
              currentResult = null;
              return;
            } else {
              await sleep(50);
            }
          }
          break;
        }
      }
      break;
    }
    case 'POST': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/distribution\/cluster\/reply$/))): {
          const nodeWithTimestamp = ctx.request.body;
          if (currentMessage !== null) {
            if (nodeWithTimestamp.timestamp === currentMessage.timestamp) {
              if (acceptReply === true) {
                replys.push(nodeWithTimestamp);
              }

              switch (currentMessage.request.method) {
                case 'GET': {
                  if (replys.length === 1) {
                    const { host, port, } = replys[0];
                    const message = currentMessage;
                    fetch('http://' + host + ':' + port + '/distribution/node/execute', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(message),
                    });
                    acceptReply = false;
                    replys = [];
                  }
                  break;
                }
                case 'POST':
                case 'PUT':
                case 'DELETE': {
                  if (replys.length === nodes.length) {
                    replys.forEach((reply) => {
                      const { host, port, } = reply;
                      const message = currentMessage;
                      fetch('http://' + host + ':' + port + '/distribution/node/execute', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(message),
                      });
                    });
                    replys = [];
                  }
                  break;
                }
              }
            }
          }
          ctx.body = '';
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/distribution\/cluster\/result$/))): {
          const api = ctx.request.body;
          acceptReply = true;
          currentMessage = null;
          currentResult = api;
          ctx.body = '';
          break;
        }

        case (Array.isArray(ctx.path.match(/^\/api\/users$/))): {
          const { path, request: { body, } } = ctx;
          const timestamp = new Date().getTime();
          const request = { method: 'POST', path, body, };
          const message = { timestamp, request };
          mailbox.put(message);

          while (true) {
            if (currentResult !== null) {
              currentResult = null;
              ctx.body = currentResult;
            } else {
              await sleep(50);
            }
          }
          break;
        }
      }
      break;
    }
    case 'PUT': {
      const { path, request: { body, } } = ctx;
      const timestamp = new Date().getTime();
      const request = { method: 'PUT', path, body, };
      const message = { timestamp, request };
      mailbox.put(message);

      while (true) {
        if (currentResult !== null) {
          currentResult = null;
          ctx.body = currentResult;
        } else {
          await sleep(50);
        }
      }
      break;
    }
    case 'DELETE': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/api\/users\/([0-9a-zA-Z]+)$/))): {
          const { path, request: { body, } } = ctx;
          const timestamp = new Date().getTime();
          const request = { method: 'DELETE', path, body, };
          const message = { timestamp, request };
          mailbox.put(message);

          while (true) {
            if (currentResult !== null) {
              currentResult = null;
              ctx.body = currentResult;
            } else {
              await sleep(50);
            }
          }
          break;
        }
      }
      break;
    }
  }
});

export default application;
