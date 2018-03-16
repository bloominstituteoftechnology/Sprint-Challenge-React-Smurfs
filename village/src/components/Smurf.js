import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Smurf = props => {
  return (
    <Card className="Smurf">
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.height} feet tall</CardText>
        <CardText>{props.age} years old</CardText>
        {props.button}
      </CardBody>
    </Card>
  );
};

export default Smurf;
