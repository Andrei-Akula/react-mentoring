import { createCategory  } from 'src/parts/data/factory';

// category
//



// categories
//
function addNewCategory(categories, action) {
    return [].concat(createCategory(action.payload.title), categories);
}


const handlerMapper = {
    'ADD_NEW_CATEGORY': addNewCategory
};

function categories(state = [], action) {
    let actionHandler = handlerMapper[action.type];
    if (actionHandler) {
        return actionHandler(state, action);
    }
    // default
    return state;
}

export default categories;
