import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";
import axios from "axios";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      height: ""
    };
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        // console.log(response);
        this.props.getSmurfList();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Col sm={{ size: 6, offset: 3 }}>
        <Card inverse color="primary">
          <CardTitle>
            <h3>{this.props.name}</h3>
          </CardTitle>
          <CardText>
            <strong>{this.props.height} tall</strong>
            <p>{this.props.age} smurf years old</p>
          </CardText>
          <Button
            color="secondary"
            onClick={() => this.deleteSmurf(this.props.id)}
          >
            Delete Smurf
          </Button>
        </Card>
      </Col>
    );
  }
}

export default Smurf;
