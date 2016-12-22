import React from 'react';
import fetchTodos, { getTodoTask } from 'src/parts/data/fetchData';
import Categories from 'src/parts/todo/categories/Categories'
import TaskEdit from 'src/parts/task-editor/task-edit/TaskEdit'
import './TaskEditor.css';


class TaskEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: fetchTodos() };
        console.log('TaskEditor this.state.data', this.state.data);
    }

    render () {
        const { task, catId } = getTodoTask(this.props.params.taskId, this.state.data);
        console.log('TaskEditor task', task, catId, this.props.params.taskId);
        return (
            <section className="TaskEditor">
                <div className="container is-fluid">
                    <div className="columns task-editor-layout">
                      <div className="column is-one-third">
                        <Categories categoryList={this.state.data} />
                      </div>
                      <div className="column">
                        <TaskEdit task={task} catId={catId} />
                      </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TaskEditor;
