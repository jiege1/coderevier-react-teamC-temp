
import { DvaInstance, Model } from 'dva';
import TodoList from 'containers/todoList/model';

const models: Model[] = [
  TodoList,
];

const injectModels = (app: DvaInstance): void => {
  models.forEach(model => {
    app.model(model);
  });
};

export default injectModels;
