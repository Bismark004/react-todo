

import React, { useState } from 'react';

function DisplayTask(props) {
    const [editedTask, setEditedTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const editTask = (index) => {
        setEditIndex(index);
        setEditedTask(props.tasks[index]);
    };

    const handleEditChange = (event) => {
        setEditedTask(event.target.value);
    };

    const saveTask = () => {
        const updatedTasks = props.tasks.map((task, index) => {
            return index === editIndex ? editedTask : task;
        });
        props.setTasks(updatedTasks);
        setEditIndex(null);
        setEditedTask('');
    };

    return (
        <div>
            {props.tasks.map((task, index) => (
                <div key={index} className='task'>
                    {editIndex === index ? (
                        <div>
                            <input value={editedTask} onChange={handleEditChange} />
                            <button onClick={saveTask}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <p>{task}</p>
                            <button onClick={() => editTask(index)}>Edit</button>
                            <button onClick={() => props.deleteTask(index)}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default DisplayTask;
