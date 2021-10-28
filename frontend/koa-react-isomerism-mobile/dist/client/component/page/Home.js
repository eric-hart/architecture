"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../../component/common/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Home extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, "Home", /*#__PURE__*/_react.default.createElement(_Link.default, {
      to: "/"
    }, "index"), /*#__PURE__*/_react.default.createElement(_Link.default, {
      to: "/user"
    }, "user"));
  }

}

var _default = Home;
exports.default = _default;