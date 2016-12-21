import React, { Component } from 'react';
import MainBar from 'src/parts/main-bar/MainBar';
import ProgressBar from 'src/parts/progress/ProgressBar';
import Categories from 'src/parts/todo/categories/Categories';
import Tasks from 'src/parts/todo/tasks/Tasks';
import fetchTodos, { fetchTodoCategoryItems } from 'src/parts/data/fetchData';
import './Todo.css';

function getTasks(catId, categories) {
    for (let cat of categories) {
        if (cat.id === catId) {
            return cat.items;
        } else {
            let tasks = getTasks(catId, cat.subCategories);
            if (tasks.length > 0) {
                return tasks;
            }
        }

    }
    return [];
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: fetchTodos() };
        console.log('this.state.data', this.state.data);
    }

    render() {
        const tasks = getTasks(this.props.params.catId, this.state.data);
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
