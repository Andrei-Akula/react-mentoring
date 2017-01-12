// Action types
//
export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const ADD_NESTED_CATEGORY = 'ADD_NESTED_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const CONFIRM_DELETE_CATEGORY = 'CONFIRM_DELETE_CATEGORY';
export const TOGGLE_CATEGORY_SHOW_NESTED = 'TOGGLE_CATEGORY_SHOW_NESTED';
export const CHANGE_CATEGORY_TITLE = 'CHANGE_CATEGORY_TITLE';

export const SHOW_CATEGORY_TASKS = 'SHOW_CATEGORY_TASKS';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const TOGGLE_TASK_DONE = 'TOGGLE_TASK_DONE';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_EDIT_TASK = 'UPDATE_EDIT_TASK';
export const SAVE_TASK_CHANGES = 'SAVE_TASK_CHANGES';
export const CANCEL_EDIT_TASK = 'CANCEL_EDIT_TASK';
export const MOVE_TASK_TO_CATEGORY = 'MOVE_TASK_TO_CATEGORY';

export const APPLY_TASK_FILTER = 'APPLY_TASK_FILTER';
export const CANCEL_TASK_FILTER = 'CANCEL_TASK_FILTER';
export const SHOW_DONE_TASK_FILTER = 'SHOW_DONE_TASK_FILTER';

// Action creator
// e.g.
// createAction(SHOW_CATEGORY_TASKS, categoryId)
// createAction(TOGGLE_TASK_DONE, taskId)

export default function createAction(type, payload) {
    return {
        type,
        payload
    }
}
