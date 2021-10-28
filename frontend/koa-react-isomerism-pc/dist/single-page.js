"use strict";require("@babel/polyfill"),require("whatwg-fetch");var _reactDom=_interopRequireDefault(require("react-dom")),_react=_interopRequireDefault(require("react")),_reactRedux=require("react-redux"),_reactRouterDom=require("react-router-dom"),_store=_interopRequireDefault(require("./store")),_Home=_interopRequireDefault(require("./component/page/Home")),_User=_interopRequireDefault(require("./component/page/User"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_reactDom.default.render(_react.default.createElement(_reactRedux.Provider,{store:_store.default},_react.default.createElement(_reactRouterDom.BrowserRouter,null,_react.default.createElement(_reactRouterDom.Switch,null,_react.default.createElement(_reactRouterDom.Route,{exact:!0,path:"/",children:_react.default.createElement(_Home.default,null)}),_react.default.createElement(_reactRouterDom.Route,{exact:!0,path:"/user",children:_react.default.createElement(_User.default,null)})))),document.querySelector("main#frontend-app"));