import React from 'react'

const TodoList = (props) => {
  const { task, onClickDelete } = props;

  return (
    <div className="common-area">
      <ul className="todolist">
        {task.map((todo, index) => {
          return (
            <li key={index} className='todo'>
              <span className='todo_task' >{todo}</span>
              <i className="fas fa-trash-alt" onClick={() => onClickDelete(index)}></i>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList