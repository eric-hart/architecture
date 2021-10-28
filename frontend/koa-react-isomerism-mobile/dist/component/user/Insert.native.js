"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native"),_insert=require("../../action/user/insert"),_user=require("../../action/user/user"),_store=_interopRequireDefault(require("../../store")),_Button=_interopRequireDefault(require("../common/Button")),_Input=_interopRequireDefault(require("../common/Input"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class Insert extends _react.default.Component{handleIdInputChange(e){_store.default.dispatch((0,_insert.changeId)(e))}handleNameInputChange(e){_store.default.dispatch((0,_insert.changeName)(e))}render(){return _react.default.createElement(_reactNative.View,null,_react.default.createElement(_Input.default,{placeholder:"id",onChangeText:e=>this.handleIdInputChange.bind(this,e)()}),_react.default.createElement(_Input.default,{placeholder:"name",onChangeText:e=>this.handleNameInputChange.bind(this,e)()}),_react.default.createElement(_Button.default,{title:"insert",onPress:()=>_store.default.dispatch((0,_user.insert)(this.props.user))}))}}var _default=Insert;exports.default=_default;