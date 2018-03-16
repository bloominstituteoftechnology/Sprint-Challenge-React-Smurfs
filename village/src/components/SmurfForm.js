import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }
  clearState() {
    this.setState({
      name: "",
      age: "",
      height: ""
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
    console.log(this.props.test);
    return (
      <div className="SmurfForm">
        <Form
          onSubmit={event => {
            this.props.submit(
              {
                name: this.state.name,
                height: this.state.height,
                age: this.state.age
              },
              this.props.id
            );
            this.clearState();
          }}
        >
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
                Submit
              </Button>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
