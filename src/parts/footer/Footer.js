import React from 'react';
import logo from './logo.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer hero is-dark">
          <div className="hero-body">
            <div className="container">
                <div className="columns">
                  <div className="column has-text-centered">
                    <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <div className="column">
                    Second column
                  </div>
                  <div className="column">
                    Third column
                  </div>
                  <div className="column">
                    Fourth column
                  </div>
                </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;
