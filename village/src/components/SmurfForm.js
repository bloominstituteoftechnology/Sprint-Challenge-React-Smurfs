import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const {name, age, height} = this.state; 
    const smurfData = {name, age, height}; 
    const postSmurfs = axios.post('http://localhost:3333/smurfs', smurfData);
        postSmurfs
          .then(response =>{
              this.setState(() => ({smurfs:response.data}));
              window.location.reload(true);

          })
          .catch(err =>{
            console.log(err);
          });
      
    }

   
  

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  render() {
    return (
      
      <div className="SmurfForm">
      <button className = 'home-button'><Link to = '/'> Exit the Village </Link></button>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="(i.e. Papa Smurf)"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="(in Smurf Years)"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="(in cm)"
            value={this.state.height}
            name="height"
          />
          <button className = "add-button" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;