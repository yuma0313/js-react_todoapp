import React from 'react'
import Task from './Task';

const TodoList = (props) => {
  const { task, onClickDelete, editTask, editText } = props;

  return (
    <div className="common-area">
      <ul className="todolist">
        {task.map((todo, index) => {
          return < Task todo={todo}
            index={index}
            onClickDelete={onClickDelete}
            editTask={editTask}
            editText={editText}
          />;
        })}
      </ul>
    </div>
  )
}

export default TodoList