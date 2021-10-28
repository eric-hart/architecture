"use strict";require("@babel/polyfill"),require("whatwg-fetch");var _reactDom=_interopRequireDefault(require("react-dom")),_react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom"),_HomeWeb=_interopRequireDefault(require("./component/page/Home@web")),_UserWeb=_interopRequireDefault(require("./component/page/User@web")),_store=_interopRequireDefault(require("./store"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_store.default.components=[],_store.default.subscribe(()=>{_store.default.subscribers.forEach(e=>{var t=_store.default.getState();e.setState({state:t})})}),_reactDom.default.hydrate(_react.default.createElement(_reactRouterDom.BrowserRouter,null,_react.default.createElement(_reactRouterDom.Switch,null,_react.default.createElement(_reactRouterDom.Route,{exact:!0,path:"/",children:_react.default.createElement(_HomeWeb.default,null)}),_react.default.createElement(_reactRouterDom.Route,{exact:!0,path:"/user",children:_react.default.createElement(_UserWeb.default,null)}))),document.querySelector("main#frontend-app"));