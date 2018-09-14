import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: -1
    };
  }

  addSmurf = (event) => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    });

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  updateSmurf = (event) => {
    event.preventDefault();

    this.props.putSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    }, this.state.id);

    this.setState({
      name: '',
      age: '',
      height: '',
      id: -1
    });

    this.props.history.push('/');
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.editingSmurf ? this.updateSmurf : this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            type='number'
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
        </form>
      </div>
    );
  }
}

SmurfForm.propTypes = {
  postSmurf: PropTypes.func.isRequired,
  putSmurf: PropTypes.func.isRequired,
  editingSmurf: PropTypes.bool.isRequired
};

export default SmurfForm;
