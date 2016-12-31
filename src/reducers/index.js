import tasks from './tasks';
import categories from './categories';
import taskFilter from './taskFilter';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    categories,
    tasks,
    taskFilter
});

export default todoApp;
