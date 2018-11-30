import React, { Component } from 'react';

import './SmurfForm.scss';

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

    this.props.addFunc(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className='smurf-form' onSubmit={this.addSmurf}>
        <input
          onChange={this.handleInputChange}
          placeholder="name"
          value={this.state.name}
          name="name"
          autoComplete='off'
        />
        <input
          onChange={this.handleInputChange}
          placeholder="age"
          value={this.state.age}
          name="age"
          autoComplete='off'
        />
        <input
          onChange={this.handleInputChange}
          placeholder="height"
          value={this.state.height}
          name="height"
          autoComplete='off'
        />
        <button type="submit">Add to the village</button>
      </form>
    );
  }
}

export default SmurfForm;
