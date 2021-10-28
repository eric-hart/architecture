"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _users = require("../../../util/users");

var _usersAction = require("../../../action/user/usersAction");

var _store = _interopRequireDefault(require("../../../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(state = {
  insert: {
    user: {
      id: '-1',
      name: ''
    }
  },
  update: {
    user: {
      id: '-1',
      name: ''
    }
  },
  search: {
    id: '-1'
  },
  select: {
    users: []
  }
}, action) {
  switch (action.type) {
    case 'user/selectAll':
      {
        const users = (0, _users.selectAll)();
        return { ...state,
          select: {
            users
          }
        };
      }

    case 'user/selectById':
      {
        const users = (0, _users.selectById)(action.id);
        return { ...state,
          select: {
            users
          }
        };
      }

    case 'user/insert':
      {
        (0, _users.insert)(action.user).then(() => {
          _store.default.dispatch((0, _usersAction.selectAll)());
        });
        return { ...state
        };
      }

    case 'user/update':
      {
        (0, _users.update)(action.user).then(() => {
          _store.default.dispatch((0, _usersAction.selectAll)());
        });
        return { ...state
        };
      }

    case 'user/deleteById':
      {
        (0, _users.deleteById)(action.id).then(() => {
          _store.default.dispatch((0, _usersAction.selectAll)());
        });
        return { ...state
        };
      }

    case 'insert/changeId':
      {
        const id = action.id;
        return { ...state,
          insert: {
            user: { ...state.insert.user,
              id
            }
          }
        };
      }

    case 'insert/changeName':
      {
        const name = action.name;
        return { ...state,
          insert: {
            user: { ...state.insert.user,
              name
            }
          }
        };
      }

    case 'update/changeId':
      {
        const id = action.id;
        return { ...state,
          update: {
            user: { ...state.update.user,
              id
            }
          }
        };
      }

    case 'update/changeName':
      {
        const name = action.name;
        return { ...state,
          update: {
            user: { ...state.update.user,
              name
            }
          }
        };
      }

    case 'search/changeId':
      {
        const id = action.id;
        return { ...state,
          search: {
            id
          }
        };
      }

    default:
      return state;
  }
}