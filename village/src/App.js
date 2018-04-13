import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();

    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    this.getSmurfs();
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  getSmurfs() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      // You'll need to make sure you have the right properties on state and pass them down to props.
      this.setState({ smurfs: response.data })
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfs={() => this.getSmurfs()}/>
        <Smurfs smurfs={this.state.smurfs}/>
        {/* Notice what your map function is looping over and returning inside of Smurfs. */}
      </div>
    );
  }
}

export default App;
