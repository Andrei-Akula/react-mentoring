
function getTask(tasks, taskId) {
    return tasks.filter(t => t.id === taskId)[0];
}

// convert flat category list into category tree
function expandAllCategories(categories, parentId) {
    return categories
        .filter(cat => cat.parentId === parentId)
        .map((cat) => {
            let catWithSubs = Object.assign({}, cat);
            catWithSubs.subCategories = expandAllCategories(categories, cat.id);
            return catWithSubs;
        });
}

export { getTask, expandAllCategories };
