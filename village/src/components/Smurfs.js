import React, { Component } from "react";
import { Card, CardBody, CardTitle, Col, Row, Button } from "reactstrap";

import Smurf from "./Smurf";

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  render() {
    return (
      <Card className="Smurfs">
        <CardBody>
          <CardTitle>Smurf Village</CardTitle>
          <Row>
            {this.props.smurfs.map(smurf => {
              return (
                <Col sm={3} className="my-2">
                  <Smurf
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    button={
                      <Button
                        onClick={() => {
                          this.props.delete(smurf.id);
                        }}
                      >
                        X
                      </Button>
                    }
                  />
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    );
  }

  componentDidMount() {
    this.setState({ smurfs: this.props.smurfs });
  }
}

export default Smurfs;
