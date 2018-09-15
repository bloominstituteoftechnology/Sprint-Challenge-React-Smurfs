import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height,
      id: this.props.smurf.id
    };
  };

  addSmurf = (event) => {
    event.preventDefault();
    this.props.postSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    });
  };

  updateSmurf = (event) => {
    event.preventDefault();
    this.props.putSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    }, this.state.id);
  };

  handleInputChange = (e) => {
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
  };
};

SmurfForm.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  }).isRequired,
  editingSmurf: PropTypes.bool.isRequired,
  postSmurf: PropTypes.func.isRequired,
  putSmurf: PropTypes.func.isRequired
};

export default SmurfForm;
