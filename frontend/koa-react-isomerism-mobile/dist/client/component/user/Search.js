"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Search extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleIdInputChange = this.handleIdInputChange.bind(this);
  }

  handleIdInputChange(e) {
    this.props.changeId(e.target.value);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "serach",
      placeholder: "id",
      onChange: e => this.handleIdInputChange(e)
    }), /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.props.selectById.bind(this, this.props.id)
    }, "serach"));
  }

}

var _default = Search;
exports.default = _default;