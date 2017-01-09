import React from 'react';
import { connect } from 'react-redux';
import TaskEditor from 'src/parts/task-editor/TaskEditor';
import createAction, { SAVE_TASK_CHANGES } from 'src/actions/index';

function getTask(tasks, taskId) {
    return tasks.filter(t => t.id === taskId)[0];
}

function expandCategories(categories, parentId) {

    // subCategories
    //return categories
    var cats = categories
        .filter(cat => cat.parentId === parentId)
        .map((cat) => {
            let catWithSubs = Object.assign({}, cat);
            catWithSubs.subCategories = expandCategories(categories, cat.id);
            return catWithSubs;
        });

    return cats;
}

function mapStateToProps(state, ownProps) {
    return {
        categories: expandCategories(state.categories, null),
        taskEditing: {
            task: Object.assign({}, getTask(state.tasks, ownProps.routeParams.taskId))
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSaveTaskChanges(task) {
            dispatch(createAction(SAVE_TASK_CHANGES, task));
        }
    }
}

const TaskEditorContainer = connect(mapStateToProps, mapDispatchToProps)(TaskEditor);

export default TaskEditorContainer;
