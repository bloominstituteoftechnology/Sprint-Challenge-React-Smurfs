import React from 'react';
import RemoveSmurf from './RemoveSmurf';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name} #{(props.index)+1}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
      <RemoveSmurf index={props.index} />
    </div>
  );
}


export default Smurf;