import React from 'react';
import { connect } from 'react-redux';
import TaskEditor from 'src/parts/task-editor/TaskEditor';
import { getTask, expandAllCategories } from 'src/parts/data/helpers';
import createAction, { SAVE_TASK_CHANGES, UPDATE_EDIT_TASK } from 'src/actions/index';



function mapStateToProps(state, ownProps) {
    return {
        categories: expandAllCategories(state.categories, null),
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
