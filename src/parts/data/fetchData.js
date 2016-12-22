import { createItem, createCategory  } from './factory';

var data = [
    createCategory('Category #1', [createItem('Item 1 1', '', true), createItem('Item 1 2', ''), createItem('Item 1 2', '')],
        createCategory('Category #1.2', [createItem('Item 1.2 1', ''), createItem('Item 1.2 2', ''), createItem('Item 1.2 3', '')]),
        createCategory('Category #1.3', [createItem('Item 1.3 1', ''), createItem('Item 1.3 2', ''), createItem('Item 1.3 3', '')])
    ),
    createCategory('Category #2', [createItem('Item 2 1', ''), createItem('Item 2 2', ''), createItem('Item 2 2', '')],
        createCategory('Category #2.2', [createItem('Item 2.2 1', ''), createItem('Item 2.2 2', ''), createItem('Item 2.2 3', '')]),
        createCategory('Category #2.3', [createItem('Item 2.3 1', ''), createItem('Item 2.3 2', ''), createItem('Item 2.3 3', '')])
    )
];

function fetchTodos() {
    return data;
}

function getTodoTasks(catId, categories) {
    for (let cat of categories) {
        if (cat.id === catId) {
            return cat.items;
        } else {
            let tasks = getTodoTasks(catId, cat.subCategories);
            if (tasks.length > 0) {
                return tasks;
            }
        }

    }
    return [];
}

function getTodoTask(taskId, categories) {
    for (let cat of categories) {
        let task = cat.items.reduce((acc, item) => item.id === taskId ? item : acc, null) || getTodoTask(taskId, cat.subCategories);
        if (task !== null) {
            return task;
        }
    }
    return null;
}

export default fetchTodos;
export { getTodoTasks, getTodoTask };
