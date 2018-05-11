import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      new: false,
      id: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state)
    .then( (response) => {
      this.setState({new: true, id: response.data[response.data.length-1].id})
    })
    .catch( (error) => {
      console.log(error);
    });

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
    {console.log(this.state.id)}
    return this.state.new ? (
      <Redirect to={`/smurf/${this.state.id}`}/>
    ) : (
      <div className="SmurfForm">
        <h1>Add New Smurf</h1>
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
