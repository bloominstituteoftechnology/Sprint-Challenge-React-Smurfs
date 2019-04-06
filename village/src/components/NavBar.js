import React from "react";
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Smurfs
          </NavLink>
        </li>
        <li>
          <NavLink to="/smurf-form" activeClassName="activeNavButton">
            Add New Smurf
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
