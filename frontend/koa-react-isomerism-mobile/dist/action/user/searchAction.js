"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeId = changeId;

function changeId(id) {
  return {
    type: 'search/changeId',
    id
  };
}