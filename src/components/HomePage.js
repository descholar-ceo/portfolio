import React, { Component } from 'react';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
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
        <div className="welcome-screen">
          <h1>{welcomeMessage}</h1>
          <h2>{myNames}</h2>
          <button type="button">Start</button>
        </div>
        <div className="portfolio-navigation">
          <nav>
            <ul>
              <li><FaTimesCircle className="close-btn" /></li>
              <li><FaMinusCircle className="minimize-btn" /></li>
              <li><FaPlusCircle className="maxmize-btn" /></li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Contact me</li>
              <li>Settings</li>
            </ul>
          </nav>
          <main>
            <aside>jjjjj</aside>
            <section>kkkkk</section>
          </main>
        </div>
      </div>
    );
  }
}

export default HomePage;
