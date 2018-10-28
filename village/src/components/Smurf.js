import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
  CardBody,
  CardGroup,
  CardColumns
} from "reactstrap";

const Smurf = props => {
  return (
    <CardColumns >
      <Card
        body
        inverse
        style={{
          backgroundColor: "#88CCFF",
          borderColor: "#88CCFF",
        }}
      >
        <CardTitle>{props.name}</CardTitle>
        <CardText>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <Button onClick={props.deleteSmurf(props.id)}>Delete</Button>
        </CardText>
      </Card>
    </CardColumns>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
