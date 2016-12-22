import React from 'react';
import './TaskEdit.css';

function TaskEdit({task}) {
    return (
        <div className="TaskEdit">
            <div className="task-item box level">
                <div className="level-left">
                </div>
                <div className="level-right">
                    <div className="level-item is-inline-block">
                        <button className="button is-success">Save changes</button>
                    </div>
                    <div className="level-item is-inline-block">
                        <button className="button is-warning">Cancel</button>
                    </div>
                </div>
            </div>
            <p className="control">
                <input className="input is-primary" type="text" value={task.title} placeholder="What to Do" />
            </p>
            <p className="control">
                <label className="checkbox">
                    <input type="checkbox" checked={task.isDone} /> Done
                </label>
            </p>
            <p className="control">
                <textarea className="textarea" value={task.description} placeholder="Description"></textarea>
            </p>
        </div>
    );
}

export default TaskEdit;
