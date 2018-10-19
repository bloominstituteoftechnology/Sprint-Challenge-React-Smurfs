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
    console.log("adding smurf");
    // add code to create the smurf using the api

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };


   // Adds a new smurf
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      // axios post sends data across the web to be handled by the server to create information 
      .then(response => {
        console.log("Post response", response);
        // response is the response we get back from the server
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(error => console.log(error));

  };

  // Handles the forms input
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