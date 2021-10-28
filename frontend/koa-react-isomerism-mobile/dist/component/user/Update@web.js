"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNativeWeb=require("react-native-web"),_update=require("../../action/user/update"),_user=require("../../action/user/user"),_ButtonWeb=_interopRequireDefault(require("../common/Button@web")),_InputWeb=_interopRequireDefault(require("../common/Input@web")),_index=_interopRequireDefault(require("../../store/index"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class Update extends _react.default.Component{handleIdInputChange(e){_index.default.dispatch((0,_update.changeId)(e))}handleNameInputChange(e){_index.default.dispatch((0,_update.changeName)(e))}render(){return _react.default.createElement(_reactNativeWeb.View,null,_react.default.createElement(_InputWeb.default,{placeholder:"id",onChangeText:e=>this.handleIdInputChange.bind(this,e)()}),_react.default.createElement(_InputWeb.default,{placeholder:"name",onChangeText:e=>this.handleNameInputChange.bind(this,e)()}),_react.default.createElement(_ButtonWeb.default,{title:"update",onPress:()=>_index.default.dispatch((0,_user.update)(this.props.user))}))}}var _default=Update;exports.default=_default;