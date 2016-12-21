import React, { Component } from 'react';
import Header from 'src/parts/header/Header';

import Footer from 'src/parts/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
