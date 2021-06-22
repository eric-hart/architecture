"use strict";

var _router = _interopRequireDefault(require("@koa/router"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _application = _interopRequireDefault(require("../application"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_application.default.use(_router.default.get("/api/users", async ctx => {
  const users = (0, _nodeFetch.default)('https://localhost:2100', {
    method: 'GET'
  }).then(response => response.json());
  ctx.body = users;
}));