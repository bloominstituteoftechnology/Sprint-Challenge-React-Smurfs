import React, { Component } from 'react';

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
        <div className="nav-container">
          this is header top
        </div>
      </div>
    ) 
  }
}
 
export default Header;