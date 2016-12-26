import React from 'react';
import { Link } from 'react-router';
import './TaskEdit.css';

class TaskEdit extends React.Component {
    constructor(props) {
        super(props);
        this.task = props.task;
        this.state = {
            isDone: props.task.isDone,
            title: props.task.title,
            description: props.task.description
        };

        this.handleDone = this.handleDone.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    handleDone(e) {
        this.setState({isDone: !this.state.isDone});
    }
    handleTitle(e) {
        this.setState({title: e.target.value});
    }
    handleDescription(e) {
        this.setState({description: e.target.value});
    }
    handleSave(e) {

    }


    render () {
        return (
            <div className="TaskEdit">
                <div className="task-item box level">
                    <div className="level-left">
                    </div>
                    <div className="level-right">
                        <div className="level-item is-inline-block">
                            <button className="button is-success" onClick={this.handleSave}>Save changes</button>
                        </div>
                        <div className="level-item is-inline-block">
                            <Link className="button is-warning" to={`/category/${this.task.categoryId}`}>Cancel</Link>
                        </div>
                    </div>
                </div>
                <p className="control">
                    <input className="input is-primary" type="text" value={this.state.title} placeholder="What to Do" onChange={this.handleTitle} />
                </p>
                <p className="control">
                    <label className="checkbox">
                        <input type="checkbox" checked={this.state.isDone} onChange={this.handleDone} /> Done
                    </label>
                </p>
                <p className="control">
                    <textarea className="textarea description" value={this.state.description} placeholder="Description" onChange={this.handleDescription}></textarea>
                </p>
            </div>
        );
    }
}

export default TaskEdit;
