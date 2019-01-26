import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render(){
    return (
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurf-form">Add</NavLink>
      </header>
    )
  }
}

export default NavBar;