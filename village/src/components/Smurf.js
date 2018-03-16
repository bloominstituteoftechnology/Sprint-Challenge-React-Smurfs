import React from 'react';
import { Form, FormGroup } from 'reactstrap';

const Smurf = (props) => {
  return (
    <div className="Smurf">
    <Form>
      <FormGroup><h3>{props.name}</h3></FormGroup>
      <FormGroup><strong>{props.height} tall</strong></FormGroup>
      <FormGroup><p>{props.age} old</p></FormGroup>
      </Form>
    </div>
  );
}

export default Smurf;