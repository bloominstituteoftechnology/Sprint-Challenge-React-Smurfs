import React, { Component } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(response => {
        console.log("Post: ", response);
        this.setState({
          name: "",
          age: "",
          height: ""
        });
        this.props.get();
      });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
          <FormGroup>
            <Row>
              <Col sm={3}>
                <Label>Smurf Name: </Label>
              </Col>
              <Col sm={9}>
                <Input
                  onChange={this.updateName}
                  placeholder="name"
                  value={this.state.name}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm={3}>
                {" "}
                <Label>Smurf Age: </Label>
              </Col>
              <Col sm={9}>
                <Input
                  onChange={this.updateAge}
                  placeholder="age"
                  value={this.state.age}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm={3}>
                <Label>Smurf Height: </Label>
              </Col>
              <Col sm={9}>
                <Input
                  onChange={this.updateHeight}
                  placeholder="height"
                  value={this.state.height}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row className="d-flex justify-content-center">
              <Button className="mt-3" type="submit">
                Add to the village
              </Button>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
