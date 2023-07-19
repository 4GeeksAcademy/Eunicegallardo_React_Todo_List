import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const TodoList = () => {
  const [textInput, setTextInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChange(e) {
    setTextInput(e.target.value);
  }

  function handleTask(e) {
    if (e.key == "Enter" && textInput !== "") {
      setTaskList([...taskList, textInput]);
      setTextInput("");
    }

  }

  function deleteTask(position) {
    setTaskList(taskList.filter((_, index) => index !== position))
  }

  return (
    <div className='container d-flex justify-content-center'>
      <ul>
        <li><input type="text" placeholder="What's my task today?" value={textInput} onChange={handleChange} onKeyDown={handleTask} /></li>
        {
          taskList.map((task, index) => {
            return <li>{task} <FaTrashAlt key={index} onClick={()=>{deleteTask(index)}}></FaTrashAlt></li>
          })
        }
        <p>{taskList.length} task</p>
      </ul>

    </div>
  )
}

export default TodoList