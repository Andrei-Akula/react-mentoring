import React from 'react';
import todosList from 'src/parts/data/fetchData';
import Categories from 'src/parts/task-editor/categories/Categories'
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
    function onMoveToCategoryClick(e) {
        e.preventDefault();
        props.onUpdateTaskEditing(Object.assign({}, props.taskEditing.task, { categoryId: e.currentTarget.dataset.categoryId }))
    }
    console.log('TaskEditor', props.taskEditing.task);
    return (
        <section className="TaskEditor">
            <TaskEditorBar task={props.taskEditing.task} />
            <div className="container is-fluid">
                <div className="columns task-editor-layout">
                  <div className="column is-one-third">
                    <Categories categoryList={props.categories}
                        task={props.taskEditing.task}
                        onMoveToCategoryClick={onMoveToCategoryClick} />
                  </div>
                  <div className="column">
                    <TaskEdit task={props.taskEditing.task}
                        onSaveTaskChanges={props.onSaveTaskChanges}
                        onUpdateTaskEditing={props.onUpdateTaskEditing}  />
                  </div>
                </div>
            </div>
        </section>
    );
}

export default TaskEditor;
