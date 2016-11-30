import React from 'react'

function Task(props) {
    return (
        <li className="Task">
            <div className="task-item box">{props.task.title}</div>
        </li>
    );
}

function Tasks(props) {
    if (!props.taskList || props.taskList.length === 0) {
        return null;
    }

    const taskItems = props.taskList.map( (task) =>
        <Task key={task.id} task={task} />
    );
    return (
        <ul className="Tasks">{taskItems}</ul>
    );
}

export default Tasks
