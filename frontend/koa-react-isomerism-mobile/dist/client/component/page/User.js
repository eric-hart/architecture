"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../../../component/common/Link"));

var _Insert = _interopRequireDefault(require("../../../connect/user/Insert"));

var _Update = _interopRequireDefault(require("../../../connect/user/Update"));

var _Search = _interopRequireDefault(require("../../../connect/user/Search"));

var _Select = _interopRequireDefault(require("../../../connect/user/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Insert.default, null), /*#__PURE__*/_react.default.createElement(_Update.default, null), /*#__PURE__*/_react.default.createElement(_Search.default, null), /*#__PURE__*/_react.default.createElement(_Select.default, null), /*#__PURE__*/_react.default.createElement(_Link.default, {
      to: "/"
    }, "index"), /*#__PURE__*/_react.default.createElement(_Link.default, {
      to: "/user"
    }, "user"));
  }

}

var _default = User;
exports.default = _default;