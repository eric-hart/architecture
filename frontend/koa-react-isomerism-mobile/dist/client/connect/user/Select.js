"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Select = _interopRequireDefault(require("../../../component/user/Select"));

var _usersAction = require("../../../action/user/usersAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const actionCreators = {
  selectAll: _usersAction.selectAll,
  deleteById: _usersAction.deleteById
};

function mapStateToProps(state, ownProps = {}) {
  const {
    user: {
      select: {
        users
      }
    }
  } = state;
  return {
    users
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(_Select.default);

exports.default = _default;