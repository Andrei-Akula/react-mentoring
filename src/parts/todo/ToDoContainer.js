import React from 'react';
import { connect } from 'react-redux';
import Todo from 'src/parts/todo/Todo';
import createAction, { SHOW_DONE_TASK_FILTER, APPLY_TASK_FILTER, TOGGLE_TASK_DONE } from 'src/actions/index';

function filterCategoryTasks(tasks, params) {
    return tasks.filter(task => task.categoryId === params.catId);
}

function filterTasks(tasks, taskFilter) {
    let tss = tasks;

    if (taskFilter.showDone) {
        tss = tss.filter(task => task.isDone);
    }
    if (taskFilter.search) {
        tss = tss.filter(task => task.title.indexOf(taskFilter.search) !== -1 );
    }

    return tss;
}

function expandCategories(categories) {
    // subCategories
    return categories
        .filter(cat => cat.parentId === null)
        .map((cat) => {
            let catWithSubs = Object.assign({}, cat);
            catWithSubs.subCategories = categories.filter(sub => catWithSubs.id === sub.parentId);
            return catWithSubs;
        });
}

function mapStateToProps(state, ownProps) {
    return {
        categories: expandCategories(state.categories),
        tasks: filterTasks(filterCategoryTasks(state.tasks, ownProps.routeParams), state.taskFilter),
        taskFilter: state.taskFilter
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onShowDoneTaskFilter() {
            dispatch(createAction(SHOW_DONE_TASK_FILTER));
        },
        onSearchTaskFilter(text) {
            dispatch(createAction(APPLY_TASK_FILTER, text));
        },
        onTaskDoneClick(taskId) {
            dispatch(createAction(TOGGLE_TASK_DONE, taskId));
        }
    }
}

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ToDoContainer;
