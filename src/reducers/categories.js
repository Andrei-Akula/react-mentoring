import { createCategory  } from 'src/parts/data/factory';
import { ADD_NEW_CATEGORY, DELETE_CATEGORY } from 'src/actions/index';
// category
//



// categories
//
function addNewCategory(categories, action) {
    return [].concat(createCategory(action.payload), categories);
}


function deleteCategories(categories, action) {
    const categoriesToDelete = action.payload.categoryIdList;
    return categories.filter(c => categoriesToDelete.indexOf(c.id) === -1);
}


const handlerMapper = {
    ADD_NEW_CATEGORY: addNewCategory,
    DELETE_CATEGORY: deleteCategories
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
