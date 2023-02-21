import React from 'react'

const InputText = (props) => {
  const {todoText, getValue, addTask} = props;

  return (
    <div className="common-area">
      <h2 className="title">ADD TASK</h2>
      <input placeholder="New Task"
        className="task_value"
        value={todoText}
        onChange={getValue}
        onKeyDown={e =>{
            if (e.key === 'Enter') {
              addTask();
            }
          }
        }
      />
    </div>
  )
}

export default InputText