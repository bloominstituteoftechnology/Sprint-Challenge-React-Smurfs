import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

const Smurf = props => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 5, offset: 3 }}>
          <Card body>
            <CardTitle>{props.name}</CardTitle>
            <CardText>
              <strong>{props.height} tall</strong>
              <p>{props.age} smurf years old</p>
              <Button onClick={props.deleteSmurf(props.id)}>Delete</Button>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
