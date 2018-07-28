import React, { Component } from 'react';
import axios from 'axios';
import { react } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
const URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    const myPromise = axios.get(URL);
    // pending state - we're getting the data..
    // resolved state - we have the data or a success..
    // rejected state - something went wrong with the data.
    myPromise
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = smurf => {
    const myPromise = axios.post(URL, smurf);
    myPromise
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      console.logerror(err);
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
