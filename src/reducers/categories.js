import { createCategory  } from 'src/parts/data/factory';
import { ADD_NEW_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY_TITLE, ADD_NESTED_CATEGORY } from 'src/actions/index';

// categories
//
function changeCategoryTitle(categories, action) {
    const { categoryId, title } = action.payload;
    return categories.map(c => {
        if (c.id === categoryId) {
            return Object.assign({}, c, { title: title });
        } else {
            return c;
        }
    });
}

function addNestedCategory(categories, action) {
    const { categoryId, subCategoryTitle } = action.payload;
    if (subCategoryTitle && subCategoryTitle !== 'default') {
        return categories.map(c => {
            if (c.title === subCategoryTitle) {
                return Object.assign({}, c, { parentId: categoryId });
            } else {
                return c;
            }
        });
    } else {
        return categories;
    }
}

function addNewCategory(categories, action) {
    if (action.payload) {
        return [].concat(createCategory(action.payload), categories);
    } else {
        return categories;
    }
}


function deleteCategories(categories, action) {
    const categoriesToDelete = action.payload.categoryIdList;
    return categories.filter(c => categoriesToDelete.indexOf(c.id) === -1);
}


const handlerMapper = {
    ADD_NEW_CATEGORY: addNewCategory,
    DELETE_CATEGORY: deleteCategories,
    CHANGE_CATEGORY_TITLE: changeCategoryTitle,
    ADD_NESTED_CATEGORY: addNestedCategory
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
