export function selectAll() {
  return {
    type: 'user/selectAll',
  };
}

export function selectById(id) {
  return {
    type: 'user/selectById',
    id: id,
  };
}

export function update(user) {
  return {
    type: 'user/update',
    user,
  }
}

export function insert(user) {
  return {
    type: 'user/insert',
    user: user,
  };
}

export function deleteById(id) {
  return {
    type: 'user/deleteById',
    id,
  };
};
