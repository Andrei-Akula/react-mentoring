
function applyTaskFilter(state, action) {
    return {
        showDone: state.showDone,
        search: action.payload
    }
}

function cancelTaskFilter(state, action) {
    return {
        showDone: state.showDone,
        search: ''
    }
}

function toggleShowDoneTaskFilter(state, action) {
    return {
        showDone: !state.showDone,
        search: state.search
    }
}

const handlerMapper = {
    'APPLY_TASK_FILTER': applyTaskFilter,
    'CANCEL_TASK_FILTER': cancelTaskFilter,
    'SHOW_DONE_TASK_FILTER': toggleShowDoneTaskFilter
};

function taskFilter(state = {}, action) {
    let actionHandler = handlerMapper[action.type];
    if (actionHandler) {
        return actionHandler(state, action);
    }
    // default
    return state;
}

export default taskFilter;
