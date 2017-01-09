// task
//
function toggleDone(task, action) {
    if (task.id === action.payload) {
        return Object.assign({}, task, { isDone: !task.isDone });
    }
    return task;
}

// tasks
//
// function showCategoryTasks(tasks, action) {
//     return tasks.filter(task => task.categoryId === action.payload);
// }

function saveTaskChanges(tasks, action) {
    let taskToUpdate = action.payload;
    return tasks.map(task => {
        if (task.id === taskToUpdate.id) {
            return taskToUpdate;
        } else {
            return task;
        }
    });
}

function toggleTaskDone(tasks, action) {
    return tasks.map(task => toggleDone(task, action));
}

const handlerMapper = {
    // 'SHOW_CATEGORY_TASKS': showCategoryTasks,
    'SAVE_TASK_CHANGES': saveTaskChanges,
    'TOGGLE_TASK_DONE': toggleTaskDone
};

function tasks(state = [], action) {
    let actionHandler = handlerMapper[action.type];
    if (actionHandler) {
        return actionHandler(state, action);
    }
    // default
    return state;
}

export default tasks;
