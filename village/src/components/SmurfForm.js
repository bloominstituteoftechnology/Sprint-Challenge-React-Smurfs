import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = event => {
    // event.preventDefault(); //form was not resetting no matter what I did, so page refresh was the easy way out.
    // add code to create the smurf using the api
    if (this.state.name !== '' && this.state.age !== '' && this.state.height !== '') {
      let obj = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      }
      // POST here
      axios.post('http://localhost:3333/smurfs', obj)
          .then(res => res.data)
          .catch(err => console.log(err))
      alert('Form submitted. Please navigate home.')
    }
    else {
      // error handling here
      alert('Please enter some form data.')
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
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

export default SmurfForm;