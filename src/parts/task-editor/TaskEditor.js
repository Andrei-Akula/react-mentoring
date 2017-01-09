import React from 'react';
import todosList from 'src/parts/data/fetchData';
import Categories from 'src/parts/todo/categories/Categories'
import TaskEdit from 'src/parts/task-editor/task-edit/TaskEdit'
import './TaskEditor.css';

function TaskEditorBar({task}) {
    return (
        <section className="MainBar TaskEditorBar">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <h2 className="subtitle is-4">
                            {task.title}
                        </h2>
                    </div>
                </div>
                <div className="level-right">
                </div>
            </nav>
        </section>
    );
}

function TaskEditor(props) {
    console.log('TaskEditor task', props.taskEditing.task);
    return (
        <section className="TaskEditor">
            <TaskEditorBar task={props.taskEditing.task} />
            <div className="container is-fluid">
                <div className="columns task-editor-layout">
                  <div className="column is-one-third">
                    <Categories categoryList={props.categories} />
                  </div>
                  <div className="column">
                    <TaskEdit task={props.taskEditing.task} onSaveTaskChanges={props.onSaveTaskChanges} />
                  </div>
                </div>
            </div>
        </section>
    );
}

export default TaskEditor;
