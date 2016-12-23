import { createItem, createCategory  } from './factory';

// var data = [
//     createCategory('Category #1', [createItem('Item 1 1', '', true), createItem('Item 1 2', ''), createItem('Item 1 2', '')],
//         createCategory('Category #1.2', [createItem('Item 1.2 1', ''), createItem('Item 1.2 2', ''), createItem('Item 1.2 3', '')]),
//         createCategory('Category #1.3', [createItem('Item 1.3 1', ''), createItem('Item 1.3 2', ''), createItem('Item 1.3 3', '')])
//     ),
//     createCategory('Category #2', [createItem('Item 2 1', ''), createItem('Item 2 2', ''), createItem('Item 2 2', '')],
//         createCategory('Category #2.2', [createItem('Item 2.2 1', ''), createItem('Item 2.2 2', ''), createItem('Item 2.2 3', '')]),
//         createCategory('Category #2.3', [createItem('Item 2.3 1', ''), createItem('Item 2.3 2', ''), createItem('Item 2.3 3', '')])
//     )
// ];



class TodosList {
    constructor() {
        this.data = {
            categories: [],
            tasks: []
        };
    }

    fetchTodos() {
        this.data.categories = [
            createCategory('Category #1',
                createCategory('Category #1.2'),
                createCategory('Category #1.3')
            ),
            createCategory('Category #2',
                createCategory('Category #2.2'),
                createCategory('Category #2.3')
            )
        ];

        var tasks = [];
        for (let i = 0; i < this.data.categories.length; i++) {
            tasks = tasks.concat(assignCategoryToTasks(this.data.categories[i],
                createItem(`Item ${i+1} 1`, ''),
                createItem(`Item ${i+1} 2`, ''),
                createItem(`Item ${i+1} 3`, '')
            ));
            for (let j = 0; j < this.data.categories[i].subCategories.length; j++) {
                tasks = tasks.concat(assignCategoryToTasks(this.data.categories[i].subCategories[j],
                    createItem(`Item ${i+1}.${j+2} 1`, ''),
                    createItem(`Item ${i+1}.${j+2} 2`, ''),
                    createItem(`Item ${i+1}.${j+2} 3`, '')
                ));
            }
        }
        this.data.tasks = tasks;
        return this;
    }

    getCategories() {
        return this.data.categories;
    }

    getTodoTasks(catId) {
        return this.data.tasks.filter(task => task.categoryId === catId);
    }

    getTodoTask(taskId) {
        for (let task of this.data.tasks) {
            if (task.id === taskId) {
                return task;
            }
        }
        return null;
    }
}



function assignCategoryToTasks(category, ...tasks) {
    return tasks.map((task) => {
        task.categoryId = category.id;
        return task;
    });
    return tasks;
}

const todosList =  new TodosList();
todosList.fetchTodos();

export default todosList;
export { assignCategoryToTasks };
