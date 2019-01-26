import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
  return (
    <div className="navCont">
      <nav className="nav">
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/smurf-form" activeClassName="selected">
          Add Smurf
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
