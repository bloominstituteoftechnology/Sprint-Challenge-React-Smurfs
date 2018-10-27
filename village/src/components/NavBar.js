import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import '../App.css';


const NavBar = props => {
  return (
    <div className="navbar">
  
  <div className="smurf-list"><NavLink to="/">Smurf List</NavLink></div>
  <div className="smurf-form"><NavLink to="/SmurfForm">Add Smurfs</NavLink></div>
   <div className="smurf-update"><NavLink to="/Update">Update Smurfs</NavLink></div>  
   <div className="smurf-delete"><NavLink to="/Delete">Remove Smurfs</NavLink></div>
  
    </div>
  );
};

/* Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
}; */

export default NavBar;