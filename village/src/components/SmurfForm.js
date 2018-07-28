import React, { Component } from 'react';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: {},
      result: true
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = this.state.smurfs;
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      const smurfs = res.data;
    })
    .catch(err => console.log(err))
    this.setState({
      smurfs: {},
      result: false
    });

  }

  handleInputChange = e => {
    let newSmurf = this.state.smurfs;
    newSmurf[e.target.name] = e.target.value;
    this.setState({ newSmurf });
  };

  render() {
    if(!this.state.result) {
      return (
      <Redirect push to="/village"/>
      );
    }
    return (
      <div className="addsmurf">
        <h1>Become a Smurf Village&reg; Citizen</h1>
        <div className="addsmurf-form">
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
            <Link to="/village" className="addsmurf-form-button" onClick={e => this.addSmurf(e)}>Add to the village</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SmurfForm;
