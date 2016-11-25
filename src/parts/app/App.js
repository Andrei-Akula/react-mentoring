import React, { Component } from 'react';
import Header from 'src/parts/header/Header';
import Todo from 'src/parts/todo/Todo';
import Footer from 'src/parts/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
        <Footer />
      </div>
    );
  }
}

export default App;
