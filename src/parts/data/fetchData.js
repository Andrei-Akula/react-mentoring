import { createItem, createCategory  } from './factory';

function createItems(tasks, category, n) {
    return tasks.concat(assignCategoryToTasks(category,
        createItem(`Item ${n} 1`, '', true),
        createItem(`Item ${n} 2`, ''),
        createItem(`Item ${n} 3`, '')
    ));
}

function getInitialState() {
    var initialState = {};
    const initialStateJSON = localStorage.getItem('initialState');

    if (initialStateJSON) {
        initialState = JSON.parse(initialStateJSON);
    } else {
        initialState = createInitialState();
        localStorage.setItem('initialState', JSON.stringify(initialState));
    }

    return initialState;
}

function createInitialState() {
    const catDefault = createCategory('Default');
    catDefault.id = 'default';
    const cat1 = createCategory('Category #1');
    var categories = [
        cat1,
        createCategory('Category #1.2', cat1),
        createCategory('Category #1.3', cat1),
        catDefault
    ];

    var tasks = [];
    tasks = createItems(tasks, categories[0], '#1');
    tasks = createItems(tasks, categories[1], '#1.2');
    tasks = createItems(tasks, categories[2], '#1.3');

    return {
        categories,
        tasks,
        taskFilter: {
            showDone: false,
            search: ''
        },
        taskEditing: {
            task: null
        }
    };
}


function assignCategoryToTasks(category, ...tasks) {
    return tasks.map((task) => {
        task.categoryId = category.id;
        return task;
    });
    return tasks;
}


export default getInitialState;
export { assignCategoryToTasks };
