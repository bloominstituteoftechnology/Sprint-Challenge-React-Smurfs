import React, { Component } from "react";
import axios from "axios";
// import { resolve } from "url";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    const newSmurf = { name, age, height };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log(res.data);
        this.props.updateSmurf(res.data);
        console.log(`Posted! ${res}`);
      })
      .catch(error => {
        console.log(`You done smurfed up adding your Smurf! ${error}`);
      });
    this.setState({ name: "", age: "", height: "" });
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
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />

          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
