

import React, { useState } from 'react';
import SearchBox from './searchBox'
import DisplayTask from './DisplayTask';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const onChange = (event) => {
    setTask(event.target.value);
  };

  const onClick = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className='Todo'>
      <h1>TODO APP</h1>
      <SearchBox
        onChange={onChange}
        value={task}
        onClick={onClick}
        />

      <DisplayTask tasks={tasks} setTasks={setTasks}  deleteTask={deleteTask}/>
    </div>
  );
}

export default Todo;
