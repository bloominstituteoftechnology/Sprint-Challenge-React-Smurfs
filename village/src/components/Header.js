import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerText: '',
      location: ''
    };
  }

  componentDidUpdate() {
    if(this.props.location.pathname !== this.state.location) {
      this.setLocation();
    }
  }

  componentDidMount() {
    this.setLocation();
  }  

  setLocation() {
    let newText = 'Hello, forest wanderer!';
    if (this.props.location.pathname === '/smurfs') {
      newText = 'Welcome to the smurf village!';
    }
    this.setState({headerText: newText, location: this.props.location.pathname});
  }

  render() {
    let navigationButton = '';
    if (this.props.location.pathname === '/') {
      navigationButton = <Link to="/smurfs"><div>Go Beyond the Trees</div></Link>;
    }
    return (
      <div>
        <h1>{this.state.headerText}</h1>
        {navigationButton}
      </div>
    );
  }
}

export default Header;