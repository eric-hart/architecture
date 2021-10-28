"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Insert extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleIdInputChange = this.handleIdInputChange.bind(this);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
  }

  handleIdInputChange(e) {
    this.props.changeId(e.target.value);
  }

  handleNameInputChange(e) {
    this.props.changeName(e.target.value);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      placeholder: "id",
      onChange: e => this.handleIdInputChange(e)
    }), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      placeholder: "name",
      onChange: e => this.handleNameInputChange(e)
    }), /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.props.insert.bind(this, this.props.user)
    }, "insert"));
  }

}

var _default = Insert;
exports.default = _default;