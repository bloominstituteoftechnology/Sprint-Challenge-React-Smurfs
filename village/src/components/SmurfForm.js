import React, { Component } from 'react';
import { EventEmitter } from '../events';

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
    const { name, age, height } = this.state;
    let newSmurf = { name, age, height }
    EventEmitter.dispatch('addSmurf', newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    alert(`${name} added! Click View Smurfs to see the Village.`)
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <img className='form-builder' src={require('../images/smurf.jpg')} alt='Builder Smurf'/>
        <form className='add-form' onSubmit={this.addSmurf}>Enter Smurf Details:
          <input
            className='input-add'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className='input-add'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className='input-add'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className='submit-add' type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
