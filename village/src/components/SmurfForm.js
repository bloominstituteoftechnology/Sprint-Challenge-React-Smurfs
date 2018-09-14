import React, { Component } from "react";
import axios from "axios";

// TODO: refactor in to a simple presentational component and handle the logic inside the app component
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
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(error => {
        console.log(error);
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
      <div className="form-wrapper">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.name}
            onChange={this.props.handleInputChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.props.age}
            onChange={this.props.handleInputChange}
          />
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={this.props.height}
            onChange={this.props.handleInputChange}
          />
          <button onClick={this.props.handleSmurfSubmit}>Submit</button>
          <button onClick={this.props.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
