import React, { Component } from 'react';
import axios from "axios";


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
     
    };
    
  }
  
  
  submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(event, this.state);
    this.setState({ name: "", age: "", height: "" });
    this.props.history.push("/smurfs");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            type="number"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
