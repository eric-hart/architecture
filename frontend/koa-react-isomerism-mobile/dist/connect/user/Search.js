"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Search = _interopRequireDefault(require("../../component/user/Search"));

var _usersAction = require("../../action/user/usersAction");

var _searchAction = require("../../action/user/searchAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const actionCreators = {
  selectById: _usersAction.selectById,
  changeId: _searchAction.changeId
};

function mapStateToProps(state, ownProps = {}) {
  const {
    user: {
      search: {
        id
      }
    }
  } = state;
  return {
    id
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(_Search.default);

exports.default = _default;