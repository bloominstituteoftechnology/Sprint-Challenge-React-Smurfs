import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: 0,
      height: '',
      id: '',
    }
  }
  
  componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res);
      this.setState( {smurfs : res})
    })
    .catch(err => {
      console.log(err);
    });
  }


  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
