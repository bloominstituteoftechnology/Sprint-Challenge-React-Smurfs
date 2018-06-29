import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log("GET RESPONSE", response);
      this.setState({ smurfs: response.data });
    })
  }

  handleSubmitSmurf = e => {
    e.preventDefault();
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height };
    axios
    .post('http://localhost/3333/smurfs', smurf)
    .then(response => {
        console.log("POST RESPONSE", response);
          this.setState({ smurfs: response.data, name: '', age: '', height: '' })
    })
    .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm 
        props = {this.state}
        handleSubmitSmurf = {this.handleSubmitSmurf}
        handleInputChange = {this.handleInputChange}
         />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
