"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAll = selectAll;
exports.selectById = selectById;
exports.update = update;
exports.insert = insert;
exports.deleteById = deleteById;

function selectAll() {
  return {
    type: 'user/selectAll'
  };
}

function selectById(id) {
  return {
    type: 'user/selectById',
    id: id
  };
}

function update(user) {
  return {
    type: 'user/update',
    user
  };
}

function insert(user) {
  return {
    type: 'user/insert',
    user: user
  };
}

function deleteById(id) {
  return {
    type: 'user/deleteById',
    id
  };
}

;