"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Update = _interopRequireDefault(require("../../component/user/Update"));

var _usersAction = require("../../action/user/usersAction");

var _updateAction = require("../../action/user/updateAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const actionCreators = {
  update: _usersAction.update,
  changeId: _updateAction.changeId,
  changeName: _updateAction.changeName
};

function mapStateToProps(state, ownProps = {}) {
  const {
    user: {
      update: {
        user
      }
    }
  } = state;
  return {
    user
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(_Update.default);

exports.default = _default;