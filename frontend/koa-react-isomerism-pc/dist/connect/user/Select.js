"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _redux=require("redux"),_reactRedux=require("react-redux"),_Select=_interopRequireDefault(require("../../component/user/Select")),_user=require("../../action/user/user");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const actionCreators={selectAll:_user.selectAll,deleteById:_user.deleteById};function mapStateToProps(e,r=0){var{user:{select:{users:e}}}=e;return{users:e}}var _default=(0,_reactRedux.connect)(mapStateToProps,actionCreators)(_Select.default);exports.default=_default;