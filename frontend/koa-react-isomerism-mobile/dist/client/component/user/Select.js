"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Select extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.selectAll();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    nextProps.users.then(users => {
      this.setState((state, props) => ({
        users
      }));
    });
  }

  render() {
    let users;

    if (Array.isArray(this.state.users)) {
      users = this.state.users.map((user, index) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index
        }, /*#__PURE__*/_react.default.createElement("span", null, user.id), /*#__PURE__*/_react.default.createElement("span", null, user.name), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("button", {
          onClick: this.props.deleteById.bind(this, user.id)
        }, "delete")));
      });
    } else {
      users = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, this.state.users.id), /*#__PURE__*/_react.default.createElement("span", null, this.state.users.name), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.props.deleteById.bind(this, this.state.users.id)
      }, "delete")));
    }

    return /*#__PURE__*/_react.default.createElement("div", null, users);
  }

}

var _default = Select;
exports.default = _default;