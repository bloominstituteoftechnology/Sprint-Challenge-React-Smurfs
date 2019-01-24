import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

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
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(res => {
        console.log(res);
        this.props.createSmurf(res.data);
      })
      .catch(err => {
        console.log(err);
      });
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
      <Form>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </Form>
    );
  }
}

export default SmurfForm;
