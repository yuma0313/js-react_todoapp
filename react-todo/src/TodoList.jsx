import React, { useState } from 'react'
import "./styles.css";

export const TodoList = () => {
  const [todoText, setTodoText] = useState();
  const [task, setTask] = useState(["あああああ","いいいいい"]);

  //入力値を取得する
  const getValue = (e) => setTodoText(e.target.value);

  //タスクをリストに追加
  const addTask = () => {
    //フォームが未入力ならreturn
    if (todoText === "") return;
    const newTodos = [...task, todoText];
    setTask(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newTodos = [...task];
    newTodos.splice(index, 1);
    setTask(newTodos);
  }

  return (
    <>
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        <div className="common-area">
          <h2 className="title">ADD TASK</h2>
          <input placeholder="New Task"
            className="task_value"
            value={todoText}
            onChange={getValue}
            onKeyDown={e =>{
                if (e.key === 'Enter') {
                  console.log("hello");
                  e.preventDefault();
                  addTask();
                }
              }
            }
          />
        </div>
        <div className="common-area">
          <input placeholder="Search Keyword" />
        </div>
        <div className="common-area">
          <ul className="todolist">
            {task.map((todo, index) => {
              return (
                <li key={todo} className='todo'>
                  <span className='todo_task'>{todo}</span>
                  <i className="fas fa-trash-alt" onClick={() => onClickDelete(index)}></i>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}