import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Smurf = props => {
  return (
    <ListGroupItem className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </ListGroupItem>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
