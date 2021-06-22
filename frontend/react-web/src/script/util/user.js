async function selectAll() {
  const response = await window.fetch('/api/users', {
    method: 'GET',
  },);
  const users = await response.json();

  return users;
}

async function selectById(id,) {
  const response = await window.fetch(`/api/users/${id}`, {
    method: 'GET',
  },);
  const user = await response.json();

  return user;
}

async function update(user,) {
  const response = await window.fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  },);
  const newUser = await response.json();

  return newUser;
}

async function insert(user,) {
  const response = await window.fetch('/api/users', {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  },);
  const newUser = await response;

  return newUser;
}

async function deleteById(id,) {
  const response = await window.fetch(`/api/users/${id}`, {
    method: 'DELETE',
  },);
  const flag = await response.text();

  return flag;
}

export {
  selectAll,
  selectById,
  insert,
  update,
  deleteById,
};
