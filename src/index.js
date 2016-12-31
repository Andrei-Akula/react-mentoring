import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'src/parts/app/App';
//import Todo from 'src/parts/todo/Todo';
import ToDoContainer from 'src/parts/todo/ToDoContainer';
import TaskEditor from 'src/parts/task-editor/TaskEditor';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoAppReducer from './reducers/index';
import getInintialState from 'src/parts/data/fetchData';
import './index.css';

const rootPath = '/';

const store = createStore(todoAppReducer, getInintialState())

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={rootPath} component={App} >
                <IndexRoute component={ToDoContainer}/>
                <Route path="/category/:catId" component={ToDoContainer} />
                <Route path="/task/:taskId/edit" component={TaskEditor} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
