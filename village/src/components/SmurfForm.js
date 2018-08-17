import React, { Component } from 'react';
import axios from 'axios';


const URL = "http://localhost:3333/smurfs";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      url: URL,
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const newInfo = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };
    axios
    .post(URL, newInfo)
    .then(response => {
      this.setState({
        name: '',
        age: '',
        height: '',
        smurfs: response.data
      });  
    })
    .catch(error => {
      console.log("Error: ", error);
    });
    
  };




  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };





  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <h2>Add to the Smurf Village</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="number"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
