import React from 'react';
import { connect } from 'dva';
// import { IConnect } from 'common/types/model';
import { IState, IEffect } from './types';

class TodoList extends React.Component<IState & IEffect> {

  public componentDidMount() {
    this.props.getTodoList();
  }

  public render() {
    console.log('props', this.props);
    return (
      <div>
        TodoList
      </div>
    );
  }
}

const TodoListContainer = connect(
  (state) => ({
    todoList: state.todoList,
  }),
  (dispatch) => ({
    getTodoList: () => dispatch({ type: 'todoList/getTodoList' }),
  }),
)(TodoList);

export default TodoListContainer;
