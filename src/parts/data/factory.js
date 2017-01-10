import generate from 'shortid';

// var todoItem = {
//     id: 'z',
//     categoryId: 'xyz'
//     date: date,
//     isDone: false,
//     title: 'To-do item #1',
//     description: ''
// };
//
// var todoCategory = {
//     id: 'xyz',
//     title: 'Category 1',
//     parentId: 'zaq'
// };

function makeId() {
    return generate();
}

function createItem(title, desc, done=false, catId='') {
    return {
        id: makeId(),
        date: Date.now(),
        isDone: done,
        title: title,
        description: desc,
        categoryId: catId
    };
}


function createCategory(title, parent) {
    return {
        id: makeId(),
        title: title,
        parentId: parent ? parent.id : null
    };
}


export { createItem, createCategory };
