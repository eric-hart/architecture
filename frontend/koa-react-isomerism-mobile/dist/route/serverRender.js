"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(require("@koa/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverRender = new _router.default();
serverRender.get("/", async ctx => {
  ctx.body = 'index';
});
serverRender.get("/user", async ctx => {
  ctx.body = 'user';
});
var _default = serverRender;
exports.default = _default;