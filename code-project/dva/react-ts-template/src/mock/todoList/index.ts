
import { mock, Random } from 'mockjs';
import { ITodo } from 'api';
import { output } from '../common/utils';
import { IList } from 'common/types';

const todoList: ITodo[] = [
  {
    id: Random.id(),
    mask: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
  {
    id: Random.id(),
    mask: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
  {
    id: Random.id(),
    mask: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
  {
    id: Random.id(),
    mask: Random.ctitle(5, 10),
    finished: Random.boolean(),
  },
];

mock(/mock.getTodoList/, () => {

  return output<IList<ITodo>>({
    list: todoList,
  });

});
