import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = () => {
    axios
    .post('http://localhost:3333/smurfs', this.state);

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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

SmurfForm.propTypes = {
  newSmurf: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string
  }),
  addSmurf: PropTypes.func,
  handleInputChange: PropTypes.func
}

export default SmurfForm;
