
export interface IApi {
  todoList: {
    getList: string;
  };
}

export interface ITodo {
  id: string;
  mask: string;
  finished: boolean;
}
