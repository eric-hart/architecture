"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeId = changeId;
exports.changeName = changeName;

function changeId(id) {
  return {
    type: 'insert/changeId',
    id
  };
}

function changeName(name) {
  return {
    type: 'insert/changeName',
    name
  };
}