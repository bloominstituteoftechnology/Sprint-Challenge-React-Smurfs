import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SmurfForm">
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.formText.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.formText.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.formText.height}
            name="height"
          />
          <button onClick={this.props.addSmurf}>Add to the village</button>
      </div>
    );
  }
}

export default SmurfForm;
