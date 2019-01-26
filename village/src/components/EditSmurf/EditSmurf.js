import React, { Component } from 'react';

class EditSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.location.state
    };
  }

  edit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {
      ...this.state
    }
    this.props.editSmurf(smurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.edit}>
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
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}

export default EditSmurfForm;
