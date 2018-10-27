import React, { Component } from 'react';
import axios from 'axios';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''

    };
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  
  //Prevents the browser from reloading page
  addSmurf = e => {
    e.preventDefault();
    
    //Creating a new object "smurf"
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }

    this.setState({
      name: '',
      age: '',
      height: ''
    })
  
    //Passing in the new object "smurf"
    axios.post(`http://localhost:3333/smurfs`, { smurf })
    .then(results => {
    console.log(results);
    console.log(results.data);
    });

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
