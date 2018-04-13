import React, { Component } from "react";
import axios from "axios";

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
    // add code to create the smurf using the api
    // set up request body, smurf
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    // Post request
    // upon success, perform a fetch on App.js
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        this.props.fetchSmurfs();
      })
      .catch(error => console.error(error));
    // reset state after creating a new smurf
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
      <div className="SmurfForm">
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
          <button type="submit" onClick={this.addSmurf}>
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
