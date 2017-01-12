import { UPDATE_EDIT_TASK } from 'src/actions/index';

function updateEditTask(state, action) {
    return {
        task: action.payload
    };
}

const handlerMapper = {
    UPDATE_EDIT_TASK: updateEditTask
};

function taskEditing(state = {}, action) {
    let actionHandler = handlerMapper[action.type];
    if (actionHandler) {
        return actionHandler(state, action);
    }
    // default
    return state;
}

export default taskEditing;
