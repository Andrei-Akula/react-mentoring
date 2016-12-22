import React from 'react';
import { Link } from 'react-router';
import './Tasks.css';

function Task(props) {
    return (
        <li className="Task">
            <div className="task-item box level">
                <div className="level-left">
                    <label className="checkbox">
                        <input type="checkbox" checked={props.task.isDone} />
                    </label>
                    <span className="task-title">{props.task.title}</span>
                </div>
                <div className="level-right">
                    <Link to={{ pathname: `/task/${props.task.id}/edit` }}  className="icon is-small">
                        <i className="fa fa-pencil-square-o"></i>
                    </Link>
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
