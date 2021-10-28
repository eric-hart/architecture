"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Select extends _react.default.Component{constructor(...e){super(...e),_defineProperty(this,"state",{users:[]})}componentDidMount(){console.log("old mount"),this.props.selectAll()}UNSAFE_componentWillReceiveProps(e){e.users.then(r=>{this.setState((e,t)=>({users:r}))})}renderItem({item:e}){return _react.default.createElement(_reactNative.View,{style:styles.item},_react.default.createElement(_reactNative.Text,{style:styles.text},e.id),_react.default.createElement(_reactNative.Text,{style:styles.text},e.name))}render(){return _react.default.createElement(_reactNative.FlatList,{style:styles.list,renderItem:this.renderItem,data:this.state.users})}}const styles=_reactNative.StyleSheet.create({list:{marginVertical:10},item:{flex:1,flexDirection:"row",alignContent:"space-around",padding:5,marginVertical:5,borderWidth:2,borderColor:"#ddd"},text:{width:"50%",fontSize:17,color:"#444"}});var _default=Select;exports.default=_default;