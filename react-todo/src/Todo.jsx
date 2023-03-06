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
  const [searchText, setSearchText] = useState('');
  const [showTodoList, setShowTodoList] = useState([
    {
      id: 1,
      title: 'あああ'
    }, {
      id: 2,
      title: 'いいい'
    }
  ]);

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

  const getSearchValue = (e) => {
    const keyWord = e.target.value;
    setSearchText(keyWord);

    const searchedTodoList = onChangeTaskSearch(keyWord)
    setShowTodoList(searchedTodoList);
  }

  const onChangeTaskSearch = (keyWord) => {
    const searchTask = task.filter((todo) => {
      const regexp = new RegExp("^" + keyWord, "i");
      return todo.title.match(regexp);
    });
    return searchTask;
  }

  return (
    <>
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Todo List</h1>
        < InputText todoText={todoText} getValue={getValue} addTask={addTask} />
        <div className="common-area">
          <input placeholder="Search Keyword" onInput={getSearchValue} value={searchText} />
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