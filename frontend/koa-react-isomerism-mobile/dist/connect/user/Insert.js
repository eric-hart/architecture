"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Insert = _interopRequireDefault(require("../../component/user/Insert"));

var _usersAction = require("../../action/user/usersAction");

var _insertAction = require("../../action/user/insertAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const actionCreators = {
  insert: _usersAction.insert,
  changeId: _insertAction.changeId,
  changeName: _insertAction.changeName
};

function mapStateToProps(state, ownProps = {}) {
  const {
    user: {
      insert: {
        user
      }
    }
  } = state;
  return {
    user
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(_Insert.default);

exports.default = _default;