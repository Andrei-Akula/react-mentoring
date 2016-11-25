import React, { Component } from 'react';
import Header from 'src/parts/header/Header';
import Todo from 'src/parts/todo/Todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
      </div>
    );
  }
}

export default App;
