"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class MyRedux{constructor(t,e){this.reducer=t,this.state=e,this.subscribers=[],this.reducer(void 0,{type:"@init"})}getState(){return this.state}dispatch(t){t=this.reducer(this.state,t);this.state=t,this.subscribers.forEach(t=>{"function"==typeof t&&t()})}subscribe(t){this.subscribers.push(t)}}var _default=MyRedux;exports.default=_default;