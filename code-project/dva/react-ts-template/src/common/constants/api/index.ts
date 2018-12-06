
interface IApi {
  [key: string]: {
    [key: string]: {
      url: string;
      method?: 'post' | 'get';
    };
  };
}

const API: IApi = {
  todoList: {
    getList: {
      url: 'mock.getTodoList',
      // method '123',
    },
  },
};

export default API;
