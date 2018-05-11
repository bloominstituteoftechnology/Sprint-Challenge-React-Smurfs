import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      height: props.height,
      handleSmurfsUpdate: props.handleSmurfsUpdate
    };
  }

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
          <button type="submit">Modify Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
