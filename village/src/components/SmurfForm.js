import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      success: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    Axios.post("http://localhost:3333/smurfs", {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
      .then(res => {
        this.setState({ success: true });
        this.props.setSmurfs();
      })
      .catch(err => console.log(err));
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
        {this.state.success && <Redirect to="/smurfs" />}
        <form onSubmit={this.addSmurf}>
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="SmurfForm__button" type="submit">
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
