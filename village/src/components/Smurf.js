import React from 'react';
import {Card, CardBody} from 'reactstrap';
import './Smurf.css';

const Smurf = props => {
  return (
    <Card className="Smurf">
      <CardBody>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </CardBody>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

