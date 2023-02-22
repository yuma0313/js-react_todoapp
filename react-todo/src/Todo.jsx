import React, { useState } from 'react'
import "./styles.css";
import InputText from './Components/InputText';
import TodoList from './Components/TodoList';

export const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [task, setTask] = useState([
    {
      id: 1,
      title: 'あああ'
    }, {
      id: 2,
      title: 'いいい'
    }
  ]);
  const [uniqueId, setUniqueId] = useState(task.length);

  //入力値を取得する
  const getValue = (e) => {
    setTodoText(e.target.value);
  };

  //タスクをリストに追加
  const addTask = () => {
    //フォームが未入力ならreturn
    if (todoText === "") return;
    const nestUnique = uniqueId + 1;
    const newTodos = [...task, {id: nestUnique, title: todoText}];
    setTask(newTodos);
    setUniqueId(nestUnique);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    if (window.confirm("本当に削除しますか？")) {
      const newTodos = [...task];
      newTodos.splice(index, 1);
      setTask(newTodos);
    }
  }

  // const editTask = (e) => {
  //   setEditText(task.title);
  //   setEditText(e.target.value);
  //   // //フォームが未入力ならreturn
  //   // if (todoText === "") return;
  //   // const newTodos = [...task];
  //   // newTodos[index].title = value;
  //   // // newTodos = newTodos.map((todo, todoIndex) => {
  //   // //   if (todoIndex === index) {
  //   // //     todo.title = value;
  //   // //   }
  //   // // })
  //   // console.log(value);
  //   // setTask(newTodos);
  // }

  return (
    <>
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        < InputText todoText={todoText} getValue={getValue} addTask={addTask} />
        <div className="common-area">
          <input placeholder="Search Keyword" />
        </div>
        <TodoList task={task}
          onClickDelete={onClickDelete}
          getValue={getValue}
        />
      </div>
    </div>
    </>
  )
}