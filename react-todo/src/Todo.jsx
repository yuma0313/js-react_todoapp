import React, { useState } from 'react'
import "./styles.css";
import InputText from './Components/InputText';
import TodoList from './Components/TodoList';

export const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [task, setTask] = useState(["あああああ","いいいいい"]);

  //入力値を取得する
  const getValue = (e) => {
    setTodoText(e.target.value);
  };

  //タスクをリストに追加
  const addTask = () => {
    //フォームが未入力ならreturn
    if (todoText === "") return;
    const newTodos = [...task, todoText];
    setTask(newTodos);
    const value = '';
    setTodoText(value);
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
        < InputText todoText={todoText} getValue={getValue} addTask={addTask} />
        <div className="common-area">
          <input placeholder="Search Keyword" />
        </div>
        <TodoList task={task} onClickDelete={onClickDelete} />
      </div>
    </div>
    </>
  )
}