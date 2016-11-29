import generate from 'shortid';

// var todoItem = {
//     id: '1',
//     date: date,
//     isDone: false,
//     title: 'To-do item #1',
//     description: ''
// };
//
// var todoCategory = {
//     id: '1',
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


function createCategory(title, items, ...subCats) {
    var newCat = {
        id: makeId(),
        title: title,
        items: items,
        subCategories: subCats
    };

    return newCat;
}


export { createItem, createCategory };
