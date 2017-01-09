import tasks from './tasks';
import categories from './categories';
import taskFilter from './taskFilter';
import taskEditing from './taskEditing';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    categories,
    tasks,
    taskFilter,
    taskEditing
});

export default todoApp;
