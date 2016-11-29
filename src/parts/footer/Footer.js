import React from 'react';
import logo from './logo.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer hero is-dark">
          <div className="hero-body">
            <div className="container">
                <div className="columns">
                  <div className="column">
                    <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <div className="column">
                    <p>Second column</p>
                    <p>Second column</p>
                  </div>
                  <div className="column">
                    <p>Third column</p>
                    <p>Third column</p>
                  </div>
                  <div className="column">
                    <p>Fourth column</p>
                    <p>Fourth column</p>
                  </div>
                </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;
