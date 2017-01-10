import React from 'react';
import { connect } from 'react-redux';
import TaskEditor from 'src/parts/task-editor/TaskEditor';
import createAction, { SAVE_TASK_CHANGES, UPDATE_EDIT_TASK } from 'src/actions/index';

function getTask(tasks, taskId) {
    return tasks.filter(t => t.id === taskId)[0];
}

function expandCategories(categories, parentId) {

    // subCategories
    return categories
        .filter(cat => cat.parentId === parentId)
        .map((cat) => {
            let catWithSubs = Object.assign({}, cat);
            catWithSubs.subCategories = expandCategories(categories, cat.id);
            return catWithSubs;
        });
}

function mapStateToProps(state, ownProps) {
    return {
        categories: expandCategories(state.categories, null),
        taskEditing: {
            task: Object.assign({}, state.taskEditing.task ? state.taskEditing.task : getTask(state.tasks, ownProps.routeParams.taskId))
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSaveTaskChanges(task) {
            dispatch(createAction(SAVE_TASK_CHANGES, task));
        },
        onUpdateTaskEditing(task) {
            dispatch(createAction(UPDATE_EDIT_TASK, task));
        }
    }
}

const TaskEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TaskEditor);

export default TaskEditorContainer;
