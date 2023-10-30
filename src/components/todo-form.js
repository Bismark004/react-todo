import {React, useState} from 'react'

function Todo () {
    const [tasks, setTasks] = ([]);
    const [task, setTask] = ('');

    return (
        <div>
            <form onSubmit={addTask}>
                <input
                type='text'
                placeholder='Add a task'
                value={task}
                onChange={onChange}/>
                 <button onClick={addTask}>Add</button>
            </form>

           
        </div>
    )
}
export default Todo;