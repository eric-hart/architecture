
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _router=_interopRequireDefault(require("@koa/router")),_nodeFetch=_interopRequireDefault(require("node-fetch"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const restApiProxy=new _router.default;restApiProxy.get("/api/users",async e=>{const t=await(0,_nodeFetch.default)("http://localhost:2101/api/users",{method:"GET"});var a=await t.json();e.body=a}),restApiProxy.get("/api/users/:id",async e=>{var{id:t}=e.params;const a=await(0,_nodeFetch.default)(`http://localhost:2101/api/users/${t}`,{method:"GET"});t=await a.json();e.body=t}),restApiProxy.post("/api/users",async e=>{const t=await(0,_nodeFetch.default)("http://localhost:2101/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.request.body)});var a=await t.json();e.body=a}),restApiProxy.put("/api/users",async e=>{const t=await(0,_nodeFetch.default)("http://localhost:2101/api/users",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.request.body)});var a=await t.json();e.body=a}),restApiProxy.delete("/api/users/:id",async e=>{var{id:t}=e.params;const a=await(0,_nodeFetch.default)(`http://localhost:2101/api/users/${t}`,{method:"DELETE"});await a.text();e.body=flage});var _default=restApiProxy;exports.default=_default;