import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button, Row } from 'react-materialize';

const Smurf = props => {
  return (
    <Row>
      <Col m={8} s={12} offset="m2">
        <Card className='blue-grey darken-1' textClassName='white-text' title={props.name}>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <Link to={`/smurf/${props.id}`}><Button className='blue'> More Info </Button></Link>
          <Link to={`/smurfs/${props.id}`}><Button className='blue'> Update </Button></Link>
          <Button className='red' onClick={() => {props.handleDelete(props.id)}}>Delete</Button>
        </Card>
      </Col>
    </Row>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

