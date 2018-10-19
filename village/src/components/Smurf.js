import React from 'react';
import {Button} from 'reactstrap';

const Smurf = props => {

  
  return (
    <div className="Smurf-container">
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Button onClick={event => props.deleteSmurf(event, props.id)}>
      Delete
      </Button>
    </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

