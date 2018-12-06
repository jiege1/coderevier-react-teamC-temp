
import { Model } from 'dva';
import { IList } from 'common/types';
import { IModel, Reducer } from 'common/types/model';
import { ITodo } from 'api';

export interface IState extends IList<ITodo> {
  finish: boolean | 'all';
}

export interface IEffect {
  getTodoList: () => any;
}

interface IReducers {
  getListSuccess: Reducer<IState>;
}

export type ITodoListModel = IModel<IState, IReducers>;

// export interface ITodoListModel extends IModel<> {
//
//   // reducer: (state, payload? = ) => {}
// }
