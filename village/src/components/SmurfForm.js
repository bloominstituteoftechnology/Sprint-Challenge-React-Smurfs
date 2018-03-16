import React, { Component } from 'react';
import axios from 'axios';

import Smurfs from './Smurfs';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: `${this.state.height} cm`
    }
    axios.post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        console.log('Request to add was successful!', response)
        this.setState({
          smurfs: response.data,
          name: '',
          age: '',
          height: ''
        });
        
      })
      .catch(err => {
        console.log(`The request to add failed: ${err}`)
      })
    
    
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            type="number"
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height in cm"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }
}

export default SmurfForm;