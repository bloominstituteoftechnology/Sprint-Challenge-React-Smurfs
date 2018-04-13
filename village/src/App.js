import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(){
    super();
    this.state = {
      smurfs: []
      // name: '',
      // age: '',
      // height: ''
    }
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(error => {
      console.log('This FAILED', error);
    });
  }



  render() {
    return (
      <div className="App">
        <SmurfForm  getSmurfs={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
        {/* <Smurf smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
