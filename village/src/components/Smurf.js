import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Smurf extends React.Component {
  constructor() {
    super();

    this.state = {
      smurf: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getSmurf(id);
  }

  getSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        const rightSmurf = response.data.find(smurf => `${smurf.id}` === id);
        this.setState({ smurf: rightSmurf });
      })
      .catch(err => console.log(err));
  };

  inputChange = e => {
    e.preventDefault();
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };


  submitUpdate = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.smurf);
  };

  render() {
    if (!this.state.smurf) {
      return <div />;
    } else {
      return (
        <div className="Smurf">
          <h3>{this.state.smurf.name}</h3>
          <strong>{this.state.smurf.height} tall</strong>
          <p>{this.state.smurf.age} smurf years old</p>
          <Form inline onSubmit={this.submitUpdate}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="name" className="mr-sm-2">
                Name
              </Label>
              <Input
                onChange={this.inputChange}
                type="text"
                name="name"
                value={this.state.smurf.name}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="height" className="mr-sm-2">
                Height
              </Label>
              <Input
                onChange={this.inputChange}
                type="text"
                name="height"
                value={this.state.smurf.height}
                placeholder="Height"
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="age" className="mr-sm-2">
                Age
              </Label>
              <Input
                onChange={this.inputChange}
                type="text"
                name="age"
                value={this.state.smurf.age}
                placeholder="Age"
              />
            </FormGroup>
            <Button type ="submit" color="info" onClick={this.submitUpdate}>Submit</Button>
          </Form>
        </div>
      );
    }
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
