import React, { Component } from 'react';
import Home from '../Home/Home';
import Smurfs from '../Smurfs';
import SmurfForm from '../SmurfForm';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="home-container">
        <ul>
          <li><NavLink exact to="/" className="nav-text">Home</NavLink></li>
          <li><NavLink to="/village/" className="nav-text">Go to village!</NavLink></li>
          <li><NavLink to="/add-smurf/" className="nav-text">Create your smurf!</NavLink></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/village/" component={Smurfs} />
        <Route exact path="/add-smurf/" component={SmurfForm} /> 
      </div>
    ) 
  }
}
 
export default Header;