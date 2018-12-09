import React from 'react';
import { connect } from 'dva';
// import { IConnect } from 'common/types/model';
import { IState, IEffect } from './types';
import css from './index.less';

class TodoList extends React.Component<{todoList: IState} & IEffect> {

  public componentDidMount() {
    this.props.getTodoList();
  }

  public handleFinishChange(e) {
    console.log(typeof e.target.value);
    const finish = e.target.value;
    const { changeFinish } = this.props;

    switch (finish) {
      case 'true': {
        changeFinish({ finish: true });
        break;
      }
      case 'false': {
        changeFinish({ finish: false });
        break;
      }
      case 'all': {
        changeFinish({ finish: 'all' });
        break;
      }
    }

  }

  public render() {
    console.log('props', this.props);
    const { todoList: { list, finish }} = this.props;

    let filterList = list;

    if (typeof finish === 'boolean') {
      filterList = list.filter(item => item.finished === finish);
    }

    return (
      <div className={css.container}>
        <h2>任务列表</h2>
        <div className={css.list}>
          {
            filterList.map(item => {
              return (
                <div key={item.id} className={css.row}>
                  <div className={css.col}>
                    任务： {item.mask}
                  </div>
                  <div className={css.col}>
                    完成状况： {item.finished ? '完成' : '未完成'}
                  </div>
                  <div className={css.col}>
                    <a>删除</a>
                  </div>
                </div>
              );
            })
          }
        </div>

        <div className={css.list}>
          完成：
          <select onChange={this.handleFinishChange.bind(this)}>
            <option value="all">全部</option>
            <option value="true">已完成</option>
            <option value="false">未完成</option>
          </select>
        </div>

        <div className={css.list}>
          <h2>添加代办项</h2>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

const TodoListContainer = connect(
  (state) => ({
    todoList: state.todoList,
  }),
  (dispatch) => ({
    getTodoList() {
      dispatch({ type: 'todoList/getTodoList' });
    },
    changeFinish({ finish }) {
      dispatch({ type: 'todoList/changeFinish', payload: { finish }});
    },
  }),
)(TodoList);

export default TodoListContainer;
