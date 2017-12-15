import React from 'react';
import { connect } from 'react-redux'; 
import { getSmurf } from' ../actions';


const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
    </div>
  );
}

export default Smurf;


