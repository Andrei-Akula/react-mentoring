import React, { Component } from 'react';
import MainBar from 'src/parts/main-bar/MainBar';
import ProgressBar from 'src/parts/progress/ProgressBar';
import fetchTodos from 'src/parts/data/fetchData';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: fetchTodos() };
        console.log('this.state.data', this.state.data);
    }

    render() {
        return (
          <section className="Todo">
            <MainBar />
            <ProgressBar value="10" max="50" />
            <div className="columns">
              <div className="column is-one-third">
                Categories
              </div>
              <div className="column">
                Tasks
              </div>
            </div>
          </section>
        );
    }
}

export default Todo;
