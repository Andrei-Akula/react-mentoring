import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'src/parts/app/App';
import Todo from 'src/parts/todo/Todo';
import TaskEditor from 'src/parts/task-editor/TaskEditor';
import './index.css';

const rootPath = '/';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path={rootPath} component={App} >
            <IndexRoute component={Todo}/>
            <Route path="/category/:catId" component={Todo} />
            <Route path="/task/:taskId/edit" component={TaskEditor} />
        </Route>
    </Router>
), document.getElementById('root'));

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
