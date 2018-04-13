import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <div>
              <Link style={{ color: "white" }} to={`/smurfs/${this.props.id}`}>
                <h3>{this.props.smurf.name}</h3>
              </Link>
            </div>
          </CardTitle>
          <CardText>
            <strong>{this.props.smurf.height} tall</strong>
            <p>{this.props.smurf.age} smurf years old</p>
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
