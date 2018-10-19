import React, { Component } from "react";
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf ? this.props.smurf.name : "",
      age: this.props.smurf ? this.props.smurf.age : "",
      height: this.props.smurf ? this.props.smurf.height : ""
    };
  }
  addSmurf = () => {
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => this.props.addSmurftoSmurfs(res.data))
      .catch(err => console.log(err));
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
  };
  updateSmurf = () => {
    axios
      .put(`http://localhost:3333/smurfs/${this.props.smurfId}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => this.props.addSmurftoSmurfs(res.data))
      .catch(err => console.log(err));
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.falseUpdate();
    this.props.history.push("/");
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.isEditing) {
      this.updateSmurf();
    } else {
      this.addSmurf();
    }
  };
  render() {
    return (
      <div className="SmurfForm">
        <h2>{this.props.isEditing ? "Edit Smurf" : "Add Smurf"}</h2>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">
            {this.props.isEditing ? "Edit Smurf" : "Add to the village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
