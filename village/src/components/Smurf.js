import React from 'react';
import DeleteSmurf from './DeleteSmurf'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p><strong>{props.height} tall</strong></p>
      <p>{props.age} smurf years old</p>
      <DeleteSmurf updateSmurfs={props.updateSmurfs} id={props.id} />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

