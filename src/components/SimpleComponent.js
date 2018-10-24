<<<<<<< HEAD
// Code SimpleComponent Here
=======
import React, { Component } from 'react';

class DumbComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default DumbComponent;
>>>>>>> 90366b341b2158b3bc318890436fc4095f76601a
