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

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    e.preventDefault();
    // // add code to create the smurf using the api

    const info = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    };

    axios
      .post("http://localhost:3333/smurfs", info)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("Error message: ", err);
      });

    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
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
