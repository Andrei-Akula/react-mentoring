import React from 'react';
import { Link } from 'react-router';
import './Tasks.css';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = { isDone: props.task.isDone };
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
                        <span className="task-title">{this.props.task.title}</span>
                    </div>
                    <div className="level-right">
                        <Link to={`/task/${this.props.task.id}/edit`}
                            className="icon is-small" title="Edit task">
                            <i className="fa fa-pencil-square-o"></i>
                        </Link>
                    </div>
                </div>
            </li>
        );
    }

    handleOnChange(e) {
        this.setState({ isDone: !this.state.isDone });
        this.props.onTaskDoneClick(this.props.task.id);
    }
}

function Tasks(props) {
    if (!props.taskList || props.taskList.length === 0) {
        return null;
    }

    const taskItems = props.taskList.map(task => <Task key={task.id} task={task} onTaskDoneClick={props.onTaskDoneClick} />);
    return (
        <ul className="Tasks">{taskItems}</ul>
    );
}

export default Tasks
