import React from 'react';
/* prettier-ignore */
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const Smurf = props => {
  const { name, height, age } = props;
  return (
    <div className="Smurf">
      <Card style={{ width: '40%' }}>
        <CardBody>
          <img
            src="/img/Male_Smurf.jpg"
            alt="Smurf"
            style={{ width: '25%', float: 'left' }}
          />
          <CardTitle>{name}</CardTitle>
          <CardText>
            <strong>{height} tall</strong>
            <br />
            {age} smurf years old
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
