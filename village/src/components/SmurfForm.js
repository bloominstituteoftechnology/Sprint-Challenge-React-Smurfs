import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    console.log(props.dataUrl);
    this.state = {
      name: "",
      age: "",
      height: "",
      url: props.dataUrl
    };
  }

  addSmurf = event => {
    // event.preventDefault();
    // add code to create the smurf using the api
    let addedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log("name", addedSmurf);

    axios
      .post(this.state.url, addedSmurf)
      .then(response => {
        this.setState({
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => {
        console.log(err);
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
          <button type="submit">Add to the village</button>
        </form>
        <Link to={"/"}>Back to greeting</Link>
      </div>
    );
  }
}

export default SmurfForm;
