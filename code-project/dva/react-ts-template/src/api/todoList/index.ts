
import Ajax from 'common/utils/ajax';
import { IList } from 'common/types/index';
import { ITodo } from '../index';
import API from 'common/constants/api';

export const getTodoList = () => {
  return Ajax.query<void, IList<ITodo>>({
    ...API.todoList.getList,
  });
};
