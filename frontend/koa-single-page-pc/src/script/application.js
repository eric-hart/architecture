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
        case (Array.isArray(ctx.path.match(/^\/api\/users$/))): {
          const response = await fetch('http://localhost:2101/api/users', {
            method: 'GET',
          });
          const users = await response.json();
          ctx.body = users;
          break;
        }
        case (Array.isArray(ctx.path.match(/^\/api\/users\/([0-9a-zA-Z]+)$/))): {
          const [ path, id, ] = ctx.path.match(/^\/api\/users\/([0-9a-zA-Z]+)$/);
          const response = await fetch(`http://localhost:2101/api/users/${id}`, {
            method: 'GET',
          });
          const user = await response.json();
          ctx.body = user;
          break;
        }
      }
      break;
    }
    case 'POST': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/api\/users$/))): {
          const response = await fetch('http://localhost:2101/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ctx.request.body),
          });
          const user = await response.json();
          ctx.body = user;
          break;
        }
      }
      break;
    }
    case 'PUT': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/api\/users$/))): {
          const response = await fetch('http://localhost:2101/api/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ctx.request.body),
          });
          const user = await response.json();
          ctx.body = user;
          break;
        }
      }
      break;
    }
    case 'DELETE': {
      switch (true) {
        case (Array.isArray(ctx.path.match(/^\/api\/users\/([0-9a-zA-Z]+)$/))): {
          const [ path, id, ] = ctx.path.match(/^\/api\/users\/([0-9a-zA-Z]+)$/);
          const response = await fetch(`http://localhost:2101/api/users/${id}`, {
            method: 'DELETE',
          });
          const flag = await response.text();
          ctx.body = flag;
          break;
        }
      }
      break;
    }
  }
});

export default application;
