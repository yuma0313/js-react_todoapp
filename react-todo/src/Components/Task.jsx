import { useState } from "react"
import React from 'react'

const Task = (props) => {
  const {todo, index, onClickDelete} = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const onClickTodo = (index) => {
    setIsEditing(true);
  }

  const editTask = (e) => {
    setEditText(e.target.value);
  }

  const onClickEdit = (index) => {
    todo.title = editText;
    setIsEditing(false);
  }

  return (
    <>
    {isEditing ? (
      <li key={todo.id} className='todo'>
        <input className='editForm'
          value={editText}
          onChange={editTask} />
        <i className="fas fa-trash-alt" onClick={() => onClickDelete(index)}></i>
        <button className="update-button" onClick={() => onClickEdit(index)}>更新</button>
      </li>
    ) : (
      <li key={todo.id} className='todo'>
        <span className='todo_task' onClick={() => onClickTodo(index)}>{todo.title}</span>
        <i className="fas fa-trash-alt" onClick={() => onClickDelete(index)}></i>
        <button className="update-button">更新</button>
      </li>
    )}
    </>
  )
}

export default Task