import React from 'react';
import MainBar from 'src/parts/main-bar/MainBar';
import ProgressBar from 'src/parts/progress/ProgressBar';
import Categories from 'src/parts/todo/categories/Categories';
import Tasks from 'src/parts/todo/tasks/Tasks';
import fetchTodos, { getTodoTasks } from 'src/parts/data/fetchData';
import './Todo.css';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: fetchTodos() };
        console.log('Todo this.state.data', this.state.data);
    }

    render() {
        const tasks = getTodoTasks(this.props.params.catId, this.state.data);
        return (
          <section className="Todo">
            <MainBar />
            <ProgressBar value="10" max="50" />
            <div className="container is-fluid">
                <div className="columns todo-layout">
                  <div className="column is-one-third">
                    <Categories categoryList={this.state.data} />
                  </div>
                  <div className="column">
                    <Tasks taskList={tasks} />
                  </div>
                </div>
            </div>
          </section>
        );
    }
}

export default Todo;
