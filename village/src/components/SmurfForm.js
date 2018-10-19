import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state =  {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    },
  }}

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    axios
    .post('http://localhost:3333/smurfs', this.state.newSmurf)
    .then(response => this.props.update(response.data))
    .catch(error => console.log(error));

    ;

    this.setState({
      newFriend: {
      name: '',
      age: '',
      height: ''
    }});
  }

  handleInputChange = e => {
    this.setState({newSmurf: {
      ...this.state.newSmurf,
      [e.target.name]: e.target.value
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
