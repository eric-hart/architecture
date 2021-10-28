"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var _user=require("../../util/user"),_user2=require("../../action/user/user"),_store=_interopRequireDefault(require("../../store"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _default(e={insert:{user:{id:"-1",name:""}},update:{user:{id:"-1",name:""}},search:{id:"-1"},select:{users:[]}},r){switch(r.type){case"user/selectAll":var s=(0,_user.selectAll)();return{...e,select:{users:s}};case"user/selectById":var t=(0,_user.selectById)(r.id);return{...e,select:{users:t}};case"user/insert":return(0,_user.insert)(r.user).then(()=>{_store.default.dispatch((0,_user2.selectAll)())}),{...e};case"user/update":return(0,_user.update)(r.user).then(()=>{_store.default.dispatch((0,_user2.selectAll)())}),{...e};case"user/deleteById":return(0,_user.deleteById)(r.id).then(()=>{_store.default.dispatch((0,_user2.selectAll)())}),{...e};case"insert/changeId":t=r.id;return{...e,insert:{user:{...e.insert.user,id:t}}};case"insert/changeName":var u=r.name;return{...e,insert:{user:{...e.insert.user,name:u}}};case"update/changeId":u=r.id;return{...e,update:{user:{...e.update.user,id:u}}};case"update/changeName":var a=r.name;return{...e,update:{user:{...e.update.user,name:a}}};case"search/changeId":a=r.id;return{...e,search:{id:a}};default:return e}}