import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const SmurfPage = props => {
  console.log(props)
  const smurf = props.smurfs.find(smurf => smurf.id === parseInt(props.match.params.id, 10));
  console.log(smurf)
  return (
    <div>
      <nav>
        <NavLink exact className="nav-item" activeClassName="selected" to="/">Home</NavLink>
        <NavLink className="nav-item" activeClassName="selected" to="/smurfs">Village</NavLink>
        <NavLink className="nav-item" activeClassName="selected" to="/smurf-counsel">Smurf Counsel</NavLink>
      </nav>
      <h1>{smurf.name}'s Profile</h1>
      <NavLink exact className="nav-item" activeClassName="selected" to="/smurfs">Return to Village</NavLink>
    </div>
  );
};

export default SmurfPage;