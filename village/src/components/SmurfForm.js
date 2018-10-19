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
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.props.history.push("/");

    // This is here for an auto-refresh upon submitting a Smurf
    // window.location.reload();

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="SmurfSubmit">
        <form onSubmit={this.addSmurf} className="SmurfForm">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            className="input"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            className="input"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            className="input"
          />
          <button type="submit" class="btn">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
