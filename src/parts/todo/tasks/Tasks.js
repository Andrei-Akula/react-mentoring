import React from 'react';
import './Tasks.css';

function Task(props) {
    return (
        <li className="Task">
            <div className="task-item box level">
                <div className="level-left">
                    <label className="checkbox">
                        <input type="checkbox" />
                    </label>
                    <span className="task-title">{props.task.title}</span>
                </div>
                <div className="level-right">
                    <a href="#" className="icon is-small">
                        <i className="fa fa-pencil-square-o"></i>
                    </a>
                </div>
            </div>
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
