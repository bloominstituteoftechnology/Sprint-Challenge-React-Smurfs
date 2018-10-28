import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardGroup
} from "reactstrap";

const Smurf = props => {
  return (

    <CardGroup className="h-100 d-inline-block" style={{ width: "200px", margin: "10px"}}>

<Card inverse style={{backgroundColor: '#88CCFF', borderColor: '#88CCFF' }}>
        <CardTitle>{props.name}</CardTitle>
        <CardText>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
          <Button color="primary" onClick={props.deleteSmurf(props.id)}>Delete</Button>
        </CardText>
        </Card>
      </CardGroup>

  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
