"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Link(t){const r=(0,_reactRouterDom.useHistory)();return _react.default.createElement("a",{href:t.to,onClick:function(e){e.preventDefault(),r.push(t.to)}},t.children)}var _default=Link;exports.default=_default;