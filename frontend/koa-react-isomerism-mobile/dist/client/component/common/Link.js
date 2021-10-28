"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link(props) {
  const history = (0, _reactRouterDom.useHistory)();

  function handleClick(e) {
    e.preventDefault();
    history.push(props.to);
  }

  return /*#__PURE__*/_react.default.createElement("a", {
    href: props.to,
    onClick: handleClick
  }, props.children);
}

var _default = Link;
exports.default = _default;