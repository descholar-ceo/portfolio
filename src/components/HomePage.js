import React, { Component } from 'react';
import customMsg from '../utils/customMessages';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { welcomeMessage } = customMsg;
    return (
      <div className="full-div">
        <h1>{welcomeMessage}</h1>
        <div className="myPic" />
      </div>
    );
  }
}

export default HomePage;
