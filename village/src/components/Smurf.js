import React from 'react';

import { Link } from 'react-router-dom'

const Smurf = props => {
  console.log(props)
  let smurf = []

  props.smurfs.map( event => {
   if(`${event.id}` === props.match.params.id) {
      smurf.push(event)
    } 
  })
  console.log(smurf, smurf.0.name)
  
  return (
    !props.smurfs != 1 
  ? 
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  :
    <Link to={`/smurf/${props.id}`}>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </Link>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

