import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

/******** I put the update link back to the list because i wasnt done *******/
/********not because i didn't know what i was doing :)  ***********/
const NavBar = props => {
  return (
    <div className="navbar">

      <div className="smurf-list"><NavLink to="/">Smurf List</NavLink></div>
      <div className="smurf-form"><NavLink to="/SmurfForm">Add Smurfs</NavLink></div>
      <div className="smurf-update"><NavLink to="/">Update Smurfs</NavLink></div>
      <div className="smurf-delete"><NavLink to="/Delete">Remove Smurfs</NavLink></div>

    </div>
  );
};


export default NavBar;