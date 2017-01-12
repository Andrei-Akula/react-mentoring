import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'src/parts/app/App';
//import Todo from 'src/parts/todo/Todo';
import ToDoContainer from 'src/parts/todo/ToDoContainer';
import TaskEditorContainer from 'src/parts/task-editor/TaskEditorContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoAppReducer from './reducers/index';
import getInitialState from 'src/parts/data/fetchData';
import './index.css';

const rootPath = '/react-mentoring';

const store = createStore(todoAppReducer, getInitialState());

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={rootPath} component={App} >
                <IndexRoute component={ToDoContainer}/>
                <Route path="/category/:catId" component={ToDoContainer} />
                <Route path="/task/:taskId/edit" component={TaskEditorContainer} />
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
