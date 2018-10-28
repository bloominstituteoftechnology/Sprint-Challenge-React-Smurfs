import React, { Component } from "react";
import { Col, FormGroup, Form, Input, Button, Row } from "reactstrap";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const addSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addASmurf(addSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">

        <Form>
          <Row form>
            <Col lg={50} className="mt-10">
              <br />
              <br />
              <form onSubmit={this.addSmurf}>
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    placeholder="name"
                    value={this.state.name}
                    name="name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.age}
                    name="age"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    onChange={this.handleInputChange}
                    placeholder="height"
                    value={this.state.height}
                    name="height"
                  />
                </FormGroup>
                <Button type="submit">Add to the village</Button>
              </form>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
