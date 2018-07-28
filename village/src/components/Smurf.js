import React from 'react';
 import './Smurf.css';
 import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

const Smurf = props => {
  return (
    <div className="Smurf">
    <Card> 
      <CardBody> 
        <CardTitle>{props.name}</CardTitle>
      <CardText>{props.height} tall</CardText>
      <CardText>{props.age} smurf years old</CardText>
      </CardBody>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

