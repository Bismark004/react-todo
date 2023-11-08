import React, { useState } from 'react';
import './display-task.css'; 

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

    const handleDelete = (index) => {
        props.deleteTask(index);
    };

    function completeTask(index) {
        const updatedTasks = props.tasks.map((task, i) => {
            if (i === index) {
                return task + " - completed sucessfully";
            }
            return task;
        });
        props.setTasks(updatedTasks);
            



    } 

    

    return (
        <div className='display-task'>
            {props.tasks.map((task, index) => (
                <div key={index} className='task'>
                    {editIndex === index ? (
                        <div>
                            <input value={editedTask} onChange={handleEditChange} />
                            <button onClick={saveTask}>Save</button>
                        </div>
                    ) : (
                        <div className='activity'>
                            <p onClick={completeTask(index)}>{task}</p>
                            <div className='buttons'>
                                <button onClick={() => editTask(index)} className='edit'>Edit</button>
                                <button onClick={() => handleDelete(index)} className='delete'>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default DisplayTask;
