
import { ITodoListModel } from '../types/index';
import { getTodoList } from 'api/todoList';

const model: ITodoListModel = {

  namespace: 'todoList',

  state: {
    list: [],
    finish: 'all',
  },

  effects: {
    *getTodoList(a, { put }) {
      try {
        const data = yield getTodoList();
        yield put({
          type: 'getListSuccess',
          payload: {
            list: data.list,
          },
        });
      } catch (e) {

      }
    },
  },

  reducers: {
    getListSuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },

};

export default model;
