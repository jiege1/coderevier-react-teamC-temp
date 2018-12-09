
import { Model } from 'dva';
import { IList } from 'common/types';
import { IModel, Reducer } from 'common/types/model';
import { ITodo } from 'api';

export interface IState extends IList<ITodo> {
  finish: boolean | 'all';
}

export interface IEffect {
  getTodoList: () => any;
  changeFinish: (payload: Pick<IState, 'finish'>) => any;
  delTodo: (id: Pick<ITodo, 'id'>) => any;
}

interface IReducers {
  getListSuccess: Reducer<IState>;
  changeFinish: Reducer<IState>;
  delTodo: (id: Pick<ITodo, 'id'>) => any;
}

export type ITodoListModel = IModel<IState>;

// export interface ITodoListModel extends IModel<> {
//
//   // reducer: (state, payload? = ) => {}
// }
