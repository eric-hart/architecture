"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactNative=require("react-native"),_Button=_interopRequireDefault(require("../common/Button")),_Insert=_interopRequireDefault(require("../user/Insert")),_Update=_interopRequireDefault(require("../user/Update")),_Search=_interopRequireDefault(require("../user/Search")),_Select=_interopRequireDefault(require("../user/Select")),_store=_interopRequireDefault(require("../../store"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}class User extends _react.default.Component{constructor(e){super(e),this.state={state:{user:{insert:{user:{id:"-1",name:""}},update:{user:{id:"-1",name:""}},search:{id:"-1"},select:{users:[]}}}}}UNSAFE_componentWillMount(){_store.default.components.push(this)}render(){return _react.default.createElement(_reactNative.ScrollView,null,_react.default.createElement(_Insert.default,{user:this.state.state.user.insert.user}),_react.default.createElement(_Update.default,{user:this.state.state.user.update.user}),_react.default.createElement(_Search.default,{id:this.state.state.user.search.id}),_react.default.createElement(_Select.default,{users:this.state.state.user.select.users}),_react.default.createElement(_Button.default,{title:"index",onPress:()=>this.props.navigation.navigate("Index")}),_react.default.createElement(_Button.default,{title:"user",onPress:()=>this.props.navigation.navigate("User")}))}}var _default=User;exports.default=_default;