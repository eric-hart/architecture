"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _MyRedux=_interopRequireDefault(require("../util/MyRedux")),_reducer=_interopRequireDefault(require("../reducer"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const preload={},store=new _MyRedux.default(_reducer.default,preload);store.components=[],store.subscribe(()=>{const t=store.getState();store.components.forEach(e=>{e.setState({state:t})})});var _default=store;exports.default=_default;