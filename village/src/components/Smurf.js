import React from "react";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";

const Smurf = props => {
  return (    
      <Col sm={{ size: 6, offset: 3 }}>
        <Card inverse color="primary">
          <CardTitle>
            <h3>{props.name}</h3>
          </CardTitle>
          <CardText>
            <strong>{props.height} tall</strong>
            <p>{props.age} smurf years old</p>
          </CardText>
          <Button color="secondary">Delete Smurf</Button>
        </Card>
      </Col>    
  );
};

export default Smurf;
