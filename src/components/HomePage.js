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
      <h1>{welcomeMessage}</h1>
    );
  }
}

export default HomePage;
