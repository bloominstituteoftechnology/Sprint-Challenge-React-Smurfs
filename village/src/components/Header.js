import React, { Component } from 'react';
import Home from './Home';
import SmurfForm from './SmurfForm';
import { Route, Link } from 'react-router-dom';
import './Header.css';
import Goodbye from './Goodbye';

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
        <Link className="link-home" to="/Home">Home</Link>
        <Link className="link-village" to="/SmurfForm">Enter the Village</Link>
        <Link className="link-goodbye" to="/Goodbye">Goodbye</Link>
      </div>
      <div className="app-navigation-bottom">  
        {/* <Route path="/Mac" render={(props) => <Mac {...props} mac={this.state.forMac}> } /> */}
        <Route exact path="/Home" component={Home} />
        <Route path="/SmurfForm" component={SmurfForm} />
        <Route path="/Goodbye" component={Goodbye} />
      </div>
    </div>
    )      
  }
}

export default Header;