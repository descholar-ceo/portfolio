import React, { Component } from 'react';
import customMsg from '../utils/customMessages';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { welcomeMessage, myNames } = customMsg;
    return (
      <div className="portfolio-container">
        <div className="page-1-container">
          <div className="page-1-content">
            <h1>{welcomeMessage}</h1>
            <h2>{myNames}</h2>
            <button type="button">About me</button>
          </div>
          <div className="page-2-content">
            <nav>
              <span />
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
