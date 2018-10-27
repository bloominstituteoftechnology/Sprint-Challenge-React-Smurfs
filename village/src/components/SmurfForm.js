import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.smurf.name,
      age: props.smurf.age,
      height: props.smurf.height,
      id: props.smurf.id
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.props.passState(response.data);
        this.setState({
          name: "",
          age: "",
          height: ""
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(`SMURF! ${err}`);
      });
  };

  updateSmurf = (event) => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .put(`http://localhost:3333/smurfs/${this.state.id}`, newSmurf)
      .then(response => {
        this.setState({
          name: "",
          age: "",
          height: ""
        });
        this.props.history.push("/");
        this.props.passState(response.data);
      })
      .catch(err => {
        console.log(`SMURF! ${err}`);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.update ? this.updateSmurf : this.addSmurf}>
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
          <NavLink to='/' >
            <button>
              Cancel
            </button>
          </NavLink>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
