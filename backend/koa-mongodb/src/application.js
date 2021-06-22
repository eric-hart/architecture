import Koa from 'koa';
import body from 'koa-body';

import {
  MongoClient,
} from 'mongodb';

import fetch from 'node-fetch';

import Logger from '~/class/Logger';

const loggers = new Logger();

const application = new Koa();

application.use(body());

async function getDatabase() {
  const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true, });
  await client.connect();
  return client.db('test');
}

application.use(async (ctx) => {
  switch (ctx.method) {
    case 'GET': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/view\/has\/users$/))): {
          const database = await getDatabase();
          const collection = database.collection('users_has');
          const has = await collection.find({}).toArray();
          return ctx.body = has;
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/view\/users$/))): {
          const database = await getDatabase();
          const collection = database.collection('users');
          const users = await collection.find({}).sort({ id: 1 }).toArray();
          return ctx.body = users;
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/view\/users\/([0-9a-zA-Z]+)$/))): {
          const [path, id] = ctx.path.match(/^\/view\/users\/([0-9a-zA-Z]+)$/);
          const database = await getDatabase();
          const collection = database.collection('users');
          const result = await collection.find({ 'id': parseInt(id) }).sort({ id: 1 }).toArray();
          return ctx.body = result;
          break;
        }
      }
      break;
    }
    case 'POST': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/view\/users$/))): {
          const { request: { body, } } = ctx;
          let user;
          if (typeof body === 'string') {
            user = JSON.parse(ctx.request.body);
          } else {
            user = body;
          }

          const database = await getDatabase();
          const collection = database.collection('users');
          const result = collection.updateOne({ id: user.id, }, { $set: { name: user.name, }, });
          loggers.put({ method: 'POST', param: user });
          return ctx.body = result;
          break;
        }
      }
      break;
    }
    case 'PUT': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/view\/users$/))): {
          const { request: { body, } } = ctx;
          let data;
          if (typeof body === 'string') {
            data = JSON.parse(ctx.request.body);
          } else {
            data = body;
          }

          const database = await getDatabase();
          const collection = database.collection('users');
          const result = await collection.insertOne(data);
          loggers.put({ method: 'PUT', param: data });
          return ctx.body = result;
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/view\/new\/users$/))): {
          const response = await fetch('http://localhost:2300/api/users');
          const users = await response.json();
          const database = await getDatabase();
          if (JSON.stringify(users) !== '[]') {
            await database.collection('users').insertMany(users);
          }
          const result = await database.collection('users_has').insertOne({ has: true });
          return ctx.body = result;
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/view\/sync\/users$/))): {
          const intervalID = global.setInterval(() => {
            (async function() {
              while (loggers.count() !== 0) {
                const logger = loggers.take();
                switch (logger.method) {
                  case 'GET':
                    await fetch('http://localhost:2300/api/users');
                    break;
                  case 'POST':
                    await fetch('http://localhost:2300/api/users', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(logger.param),
                    });
                    break;
                  case 'PUT':
                    await fetch('http://localhost:2300/api/users', {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(logger.param),
                    });
                    break;
                  case 'DELETE':
                    const id = logger.param;
                    await fetch(`http://localhost:2300/api/users/${id}`, {
                      method: 'DELETE',
                    });
                    break;
                }
              }
              await fetch('http://localhost:2400/memorycache/users', {
                method: 'POST',
                body: '',
              });
            })();
          }, 4000);
          return ctx.body = '';
        }
      }
      break;
    }
    case 'DELETE': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/view\/users\/([0-9a-zA-Z]+)$/))): {
          const [path, id] = ctx.path.match(/^\/view\/users\/([0-9a-zA-Z]+)$/);
          const database = await getDatabase();
          const collection = database.collection('users');

          const result = await collection.deleteOne({ 'id': parseInt(id) });
          const result2 = await collection.find({}).toArray();
          loggers.put({ method: 'DELETE', param: id });
          return ctx.body = result;
          break;
        }
        break;
      }
    }
  }
});

export default application;
