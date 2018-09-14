import React, { Component } from 'react';
import Axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Might need to add 'smurf'...check this config first
      smurfs: [],
      smurf:{
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    Axios
      .post('http://localhost:3333/smurfs', this.state.smurf)
      .then(response => {
        this.setState({ smurfs: [...response.data], smurf: {
          name: '',
          age: '',
          height: ''
          }
        });
      })
  }

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf, [e.target.name]: e.target.value, } 
      });
    };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type= "text"
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
