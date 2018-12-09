
import { ITodoListModel } from '../types';
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
        list: payload.list,
      };
    },
    changeFinish(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        finish: payload.finish,
      };
    },
    delTodo(state, { payload }) {
      return {
        ...state,
        list: payload.list,
      };
    },
  },

};

export default model;
