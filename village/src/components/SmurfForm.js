import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf(event, this.state.smurf);
  }

  handleInputChange = e => {
    e.persist();
    this.setState( prevState => {
      return {
      smurf: {
        ...prevState.smurf,
         [e.target.name]: e.target.value
        }
      }
    })
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            type='text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type='number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            type='text'
          />
          <button type="submit">Add to the village</button>
          <Link to='/'>Go to Village</Link>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
