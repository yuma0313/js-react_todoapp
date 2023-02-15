const taskValue = document.getElementsByClassName('task_value')[0];
const todolist = document.getElementsByClassName('todolist')[0];
let editForm;

//タスク追加時の関数
const addTasks = (task) => {
  //入力したタスクを追加・表示する
  const listItem = document.createElement('li');
  listItem.className = 'todo';
  const showItem = todolist.appendChild(listItem);
  //liタグの中にspanタグを作成、spanタグで表示する
  const spanItem = document.createElement('span');
  spanItem.className = 'todo_task';
  listItem.appendChild(spanItem);
  spanItem.innerHTML = task;

  //タスクを削除するボタンを追加
  const deleteButton = document.createElement('i');
  deleteButton.className = 'fas fa-trash-alt';
  listItem.appendChild(deleteButton);

  //削除ボタンをクリックし、イベント発動（タスク削除）
  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });

  //既存タスクをクリックし、イベント発動（タスク編集）
  spanItem.addEventListener('click', evt => {
    evt.preventDefault();
    task = spanItem.innerHTML;
    editTask(spanItem,task);
  });

  //タスクを更新するボタンを追加
  const updateButton = document.createElement('button');
  updateButton.className = 'update-button';
  updateButton.innerHTML = '更新';
  listItem.appendChild(updateButton);

  //更新ボタンをクリックし、イベント発動（タスク更新）
  updateButton.addEventListener('click', evt => {
    evt.preventDefault();
    updateTask(spanItem);
  });
}

//削除ボタンにタスクを消すための機能をつける
const deleteTasks = (deleteButton) => {
  //自身の要素と親要素の中から一致する要素を取得
  const chosenTask = deleteButton.closest('li');
  //親要素からみた子要素を削除
  todolist.removeChild(chosenTask)
}

//Enter押下時にイベント発動（タスク追加）
taskValue.addEventListener('keypress', evt);
function evt(e) {
  if (e.keyCode === 13) {
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = "";
  }
};

//taskをクリックした際に編集できるようにする
const editTask = (spanItem, task) => {
  const textArea = document.createElement('input');
  textArea.className = 'editForm';
  textArea.value = task;
  spanItem.replaceWith(textArea);
  editForm = textArea;
}

//Enter押下時にイベント発動（タスク更新）
const updateTask = (spanItem) => {
    const chosenTask = document.getElementsByClassName('editForm')[0];
    const updatedValue = chosenTask.value;
    //spanタグに変換する
    spanItem.innerHTML = updatedValue;
    chosenTask.replaceWith(spanItem);
}