import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  // Adds a smurf
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    // If updating, set the value for each of the inputs to the smurf's values
    if (this.props.isUpdating) {
      this.props.updateSmurf(this.props.smurf.id);
    }
    else {
      this.props.addNewSmurf(event, this.state);
    }

  }

  // Handles the forms input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <p>{this.props.isUpdating ? 'Update Smurf' : 'Add New Smurf'}</p>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.props.isUpdating ? `${this.props.smurf.age}` : ''}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit">{this.props.isUpdating ? 'Update' : 'Add'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
