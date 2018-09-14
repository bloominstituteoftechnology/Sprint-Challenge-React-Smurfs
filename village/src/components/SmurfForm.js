import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
    
    axios
    .post('http://localhost:3333/smurfs', {
      name:this.state.name,
      age:this.state.age,
      height:this.state.height,
    })
      .then(response => {
      console.log(response);
    })
    .catch(err =>{
      console.log('error',err);
    })
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          
          <button type="submit">Add To The Village</button>
          
        </form>
        <Link to='/'>Leaving so soon?</Link>
      </div>
    );
  }
}

export default SmurfForm;
