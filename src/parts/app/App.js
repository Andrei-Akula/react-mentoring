import React, { Component } from 'react';
import Todo from 'src/parts/todo/Todo';
import logo from './logo.svg';
import './App.css';

function AppHeader(props) {
    return (
        <div className="AppHeader">
          <img src={props.logoSrc} className="App-logo" alt="logo" />
          <h2>React Mentoring Program</h2>
        </div>
    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader logoSrc={logo} />
        <Todo />
      </div>
    );
  }
}

export default App;
