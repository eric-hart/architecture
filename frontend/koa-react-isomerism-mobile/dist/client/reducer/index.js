"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _userReducer = _interopRequireDefault(require("../../reducer/userReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  user: _userReducer.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = _default;