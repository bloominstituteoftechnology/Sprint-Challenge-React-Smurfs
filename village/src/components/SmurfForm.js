import React, { Component } from "react";
import axios from "axios";
import "./SmurfForm.css";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addInfo = (URL, entry) => {
    axios
      .post(URL, entry)
      .then(response => console.log(response))
      .then(response => this.props.update("http://localhost:3333/smurfs"))
      .catch(err => console.log(err));
  };

  addSmurf = event => {
    event.preventDefault();
    this.addInfo("http://localhost:3333/smurfs", this.state);
    this.props.history.push("/");

    // add code to create the smurf using the api

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
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
