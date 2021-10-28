"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _store = _interopRequireDefault(require("../store"));

var _Home = _interopRequireDefault(require("../component/page/Home"));

var _User = _interopRequireDefault(require("../component/page/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Skeleton extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: _store.default
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      children: /*#__PURE__*/_react.default.createElement(_Home.default, null)
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/user",
      children: /*#__PURE__*/_react.default.createElement(_User.default, null)
    }))));
  }

}