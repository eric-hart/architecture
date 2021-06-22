import Koa from 'koa';
import body from 'koa-body';

import ReactDOMServer from 'react-dom/server';
import React from 'react';

import fetch from 'node-fetch';

import Skeleton from '~/server/Skeleton';

const application = new Koa();

application.use(body());

application.use(async (ctx) => {
  switch (ctx.method) {
    case 'GET': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/$/))): {
          ctx.body = ReactDOMServer.renderToString(<Skeleton pathname="/" />);
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/user$/))): {
          ctx.body = ReactDOMServer.renderToString(<Skeleton pathname="/user" />);
          break;
        }

        case (Array.isArray(ctx.path.match(/^\/static\/([0-9a-zA-Z\.\-]+)$/))): {
          const [ path, filename, ] = ctx.path.match(/^\/static\/([0-9a-zA-Z\.\-]+)$/);
          const response = await fetch('http://localhost:10001/' + filename, {
            method: 'GET',
          });
          const content = await response.text();
          ctx.body = content;
          break;
        }
        break;
      }
    }
  }
});

export default application;
