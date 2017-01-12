import React from 'react';
import { connect } from 'react-redux';
import Todo from 'src/parts/todo/Todo';
//import { expandCategories } from 'src/parts/data/helpers';
import createAction, { SHOW_DONE_TASK_FILTER, APPLY_TASK_FILTER, TOGGLE_TASK_DONE,
    ADD_NEW_CATEGORY, ADD_NEW_TASK, DELETE_CATEGORY, CHANGE_CATEGORY_TITLE,
    ADD_NESTED_CATEGORY } from 'src/actions/index';

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

function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories,
        tasks: filterTasks(filterCategoryTasks(state.tasks, ownProps.routeParams), state.taskFilter),
        progressData: {
            doneCount: state.tasks.filter(t => t.isDone).length,
            total: state.tasks.length
        },
        taskFilter: state.taskFilter,
        categoryId: ownProps.routeParams.catId
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
        },
        onAddCategoryClick(categoryTitle) {
            dispatch(createAction(ADD_NEW_CATEGORY, categoryTitle));
        },
        onEditCategoryTitleClick(data) {
            dispatch(createAction(CHANGE_CATEGORY_TITLE, data));
        },
        onAddSubCategoryByTitleClick(data) {
            dispatch(createAction(ADD_NESTED_CATEGORY, data));
        },
        onAddNewTaskClick(taskTitle) {
            dispatch(createAction(ADD_NEW_TASK, taskTitle));
        },
        onDeleteCategoryClick(categoryId) {
            dispatch(createAction(DELETE_CATEGORY, categoryId));
        }
    }
}

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ToDoContainer;
