import React from 'react';
import SmurfCard from './SmurfCard';
import Route from 'react-router-dom/Route';
import {  Link } from "react-router-dom";


const Smurf = props => {
  return (
    <div className="Smurf">
    <Route path="/village/:newt" render={ props => (
      <SmurfCard {...props} name={props.name} id={props.id} age={props.age} height={props.height} key={props.id} />
    ) } />
    
      <h3><Link to="/village/" >{props.name}</Link></h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

