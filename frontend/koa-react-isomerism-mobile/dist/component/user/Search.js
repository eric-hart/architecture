"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native"),_Button=_interopRequireDefault(require("../common/Button")),_Input=_interopRequireDefault(require("../common/Input"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class Search extends _react.default.Component{handleIdInputChange(e){this.props.changeId(e)}render(){return _react.default.createElement(_reactNative.View,null,_react.default.createElement(_Input.default,{placeholder:"id",onChangeText:e=>this.handleIdInputChange.bind(this,e)}),_react.default.createElement(_Button.default,{title:"search",onPress:this.props.selectById.bind(this,this.props.id)}))}}var _default=Search;exports.default=_default;