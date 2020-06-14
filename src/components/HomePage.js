import React, { Component } from 'react';
import customMsg from '../utils/customMessages';
// import myPic from '../resources/img/slides/photo-1471107340929-a87cd0f5b5f3.jpeg';

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
        {/* <img alt="foto" src={myPic} /> */}
      </div>
    );
  }
}

export default HomePage;
