import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeCls extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class App extends Component {
  render() {
    let a = [1,2,3];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            es6 works: {a.join('')}
        </p>
        <Welcome name="Sara" />
        <WelcomeCls name="Abram" />
      </div>
    );
  }
}

export default App;
