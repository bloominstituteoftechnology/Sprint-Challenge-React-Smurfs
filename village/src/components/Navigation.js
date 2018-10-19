import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
const Navigation = props => {
  return (
    <header className="mainNav">
      <nav>
        <NavLink exact to="/" className="navLink" onClick={props.homeSwitch}>
          Home
        </NavLink>
        <NavLink to="/smurf-form" className="navLink">
          {props.editing ? 'Update Smurf' : 'Add Smurf'}
        </NavLink>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  editing: PropTypes.bool.isRequired
};

export default Navigation;
