import React, { Component } from 'react';
import MainBar from 'src/parts/main-bar/MainBar';
import ProgressBar from 'src/parts/progress/ProgressBar';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <section className="Todo">
        <MainBar />
        <ProgressBar value="10" max="50" />
      </section>
    );
  }
}

export default Todo;
