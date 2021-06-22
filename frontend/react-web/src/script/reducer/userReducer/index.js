import {
  selectAll,
  selectById,
  insert,
  update,
  deleteById,
} from '~/util/user';

import {
  selectAll as selectAllAction,
} from '~/action/user/user';

import store from '~/store';

export default function(
  state = {
    insert: {
      user: {
        id: '-1',
        name: '',
      },
    },
    update: {
      user: {
        id: '-1',
        name: '',
      },
    },
    search: {
      id: '-1',
    },
    select: {
      users: [],
    },
  },
  action,
) {
  switch (action.type) {
    case 'user/selectAll':
    {
      const users = selectAll();
      return {
        ...state,
        select: {
          users,
        },
      };
    }
    case 'user/selectById': {
      const users = selectById(action.id,);
      return {
        ...state,
        select: {
          users,
        },
      };
    }
    case 'user/insert': {
      insert(action.user,)
        .then(() => {
          store.dispatch(selectAllAction());
        });

      return {
        ...state,
      };
    }
    case 'user/update': {
      update(action.user,)
        .then(() => {
          store.dispatch(selectAllAction());
        });

      return {
        ...state,
      };
    }
    case 'user/deleteById': {
      deleteById(action.id,)
        .then(() => {
          store.dispatch(selectAllAction());
        });

      return {
         ...state,
      };
    }
    case 'insert/changeId':
    {
      const id = action.id;
      return {
        ...state,
        insert: {
           user: {
             ...state.insert.user,
             id,
          },
        },
      };
    }
    case 'insert/changeName':
    {
      const name = action.name;
      return {
        ...state,
        insert: {
          user: {
            ...state.insert.user,
            name,
          },
        }
      };
    }
    case 'update/changeId':
    {
      const id = action.id;
      return {
        ...state,
         update: {
           user: {
            ...state.update.user,
            id,
           },
         },
      };
    }
    case 'update/changeName':
    {
      const name = action.name;
      return {
        ...state,
        update: {
          user: {
            ...state.update.user,
            name,
          },
        }
      };
    }
    case 'search/changeId':
    {
      const id = action.id;
      return {
        ...state,
        search: { id, },
      };
    }
    default:
      return state;
  }
}
