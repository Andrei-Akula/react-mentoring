import React from 'react';
import { Link } from 'react-router';
import './Tasks.css';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = { isDone: props.task.isDone };
        this.task = props.task;
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    render() {
        return (
            <li className="Task">
                <div className="task-item box level">
                    <div className="level-left">
                        <label className="checkbox">
                            <input type="checkbox" checked={this.state.isDone} onChange={this.handleOnChange} />
                        </label>
                        <span className="task-title">{this.task.title}</span>
                    </div>
                    <div className="level-right">
                        <Link to={`/task/${this.task.id}/edit`}  className="icon is-small">
                            <i className="fa fa-pencil-square-o"></i>
                        </Link>
                    </div>
                </div>
            </li>
        );
    }

    handleOnChange(e) {
        this.setState(prevState => ({ isDone: !prevState.isDone }));
    }
}

function Tasks(props) {
    if (!props.taskList || props.taskList.length === 0) {
        return null;
    }

    const taskItems = props.taskList.map(task => <Task key={task.id} task={task} />);
    return (
        <ul className="Tasks">{taskItems}</ul>
    );
}

export default Tasks
