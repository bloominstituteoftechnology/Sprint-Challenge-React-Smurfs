import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios.post(`http://localhost:3333/smurfs`, newSmurf) 
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location = '/smurfs';
      })
      .catch(error => {
        console.log(error);
      })
      this.setState({
        name: '',
        age: '',
        height: ''
      });
}
    

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
      <Link to='/'>Home</Link>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
            
          />
          <input
            onChange={this.handleChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
           
          />
          <input
            onChange={this.handleChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
            
          />
          <button type="submit">Add new smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
