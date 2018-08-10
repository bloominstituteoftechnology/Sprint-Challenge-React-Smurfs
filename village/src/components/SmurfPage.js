import React from 'react';
import { NavLink } from 'react-router-dom';

const SmurfPage = props => {
  console.log(props)
  const smurf = props.smurfs.find(smurf => smurf.id === parseInt(props.match.params.id, 10));
  console.log(smurf)
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurfs">Village</NavLink>
        <NavLink to="/smurf-counsel">Smurf Counsel</NavLink>
      </nav>
      <h1>Hello {smurf.name}</h1>
    </div>
  );
};

export default SmurfPage;