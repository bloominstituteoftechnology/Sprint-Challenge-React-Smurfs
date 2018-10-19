import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addNewSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  update = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf} className="smurfForm">
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
            autoComplete="off"
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
            autoComplete="off"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
            autoComplete="off"
          />
          <button
            type="submit"
            onClick={this.props.editing ? this.update : this.addSmurf}>
            {this.props.editing ? 'Update Smurf' : 'Add to the village'}
          </button>
        </form>
      </div>
    );
  }
}

SmurfForm.propTypes = {
  addNewSmurf: PropTypes.func.isRequired
};

export default SmurfForm;
