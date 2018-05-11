import React, { Component } from 'react';
import Home from './Home';
import SmurfForm from './SmurfForm';
import { Route, Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor() { 
    super();
    this.state = {
      forSmurfs: '',
    }
  }


  render() {
    return (
    <div>
      <div className="app-navigation-top">
        {/* <h2>Welcome to Smurf's Village!</h2> */}
        <img className="navigation-image" src="https://raw.githubusercontent.com/danteocualesjr/Sprint-Challenge-Routing-Axios/master/Images/smurf-logo.png" alt="smurf-logo"/>
        <Link to="/Home">Home</Link>
        <Link to="/SmurfForm">Enter the Smurf Village</Link>
      </div>
      <div className="app-navigation-bottom">  
        {/* <Route path="/Mac" render={(props) => <Mac {...props} mac={this.state.forMac}> } /> */}
        <Route exact path="/Home" component={Home} />
        <Route path="/SmurfForm" component={SmurfForm} />
      </div>
    </div>
    )      
  }
}

export default Header;
