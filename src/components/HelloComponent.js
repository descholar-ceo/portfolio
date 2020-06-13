import React, { Component } from 'react';
import customMsg from '../utils/customMessages'

class HelloComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {welcomeMessage} = customMsg;
    return (
    <h1>{welcomeMessage}</h1>
    );
  }
}

export default HelloComponent;
