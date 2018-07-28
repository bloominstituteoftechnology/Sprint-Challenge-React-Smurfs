import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      smurfListLength: [],
    }
  }

  render() {
    return <h2>Welcome Guests To The Smurf Village</h2>
  }
}

export default Header; 
