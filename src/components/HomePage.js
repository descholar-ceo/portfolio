import React, { Component } from 'react';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import customMsg from '../utils/customMessages';
import myImg from '../assets/img/slides/slide-2.jpeg';

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
          <nav className="top-nav">
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
            <nav className="aside">
              <div className="active">About me</div>
              <div className="text-white">Technical skills</div>
              <div className="text-white">Soft skills</div>
              <div className="text-white">My works</div>
              <div className="text-white">My experience</div>
              <div className="text-white">Education</div>
              <div className="text-white">Contact me</div>
            </nav>
            <section>
              <div className="about-me-content text-white">
                <div className="padding-1 about-me-content-text scroll-y" />
                <div>
                  <img src={myImg} alt="descholar-pic" />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default HomePage;
