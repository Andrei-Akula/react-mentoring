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
//     items: [],
//     subCategories: []
// };

function makeId() {
    return generate();
}

function createItem(title, desc, done=false) {
    return {
        id: makeId(),
        date: Date.now(),
        isDone: done,
        title: title,
        description: desc
    };
}


function createCategory(title, ...subCats) {
    var newCat = {
        id: makeId(),
        title: title,
        subCategories: subCats
    };

    return newCat;
}


export { createItem, createCategory };
