import React from 'react';
import DeleteSmurf from './DeleteSmurf'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3><DeleteSmurf updateSmurfs={props.updateSmurfs} id={props.id} />
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

