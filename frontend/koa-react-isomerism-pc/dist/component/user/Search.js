"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class Search extends _react.default.Component{constructor(e){super(e),this.handleIdInputChange=this.handleIdInputChange.bind(this)}handleIdInputChange(e){this.props.changeId(e.target.value)}render(){return _react.default.createElement("div",null,_react.default.createElement("input",{type:"text",id:"serach",placeholder:"id",onChange:e=>this.handleIdInputChange(e)}),_react.default.createElement("button",{onClick:this.props.selectById.bind(this,this.props.id)},"search"))}}var _default=Search;exports.default=_default;