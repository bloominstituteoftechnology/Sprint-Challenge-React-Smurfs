import React from 'react';
import { NavLink } from 'react-router-dom';

class SmurfBar extends React.Component {
  render(){
    return (
      <header>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/smurf-form">New Smurf!</NavLink>
      </header>
    )
  }
}

export default SmurfBar; 