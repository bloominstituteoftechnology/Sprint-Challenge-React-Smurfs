import React from 'react';
/* prettier-ignore */
import { Card, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Card style={{ width: '40%' }}>
        <CardBody>
          <img
            src="/img/Male_Smurf.jpg"
            alt="Smurf"
            style={{ width: '25%', float: 'left' }}
          />
          <CardTitle>{props.name}</CardTitle>
          <CardText>
            <strong>{props.height} tall</strong>
            <br />
            {props.age} smurf years old
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;
