import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data }))
    .catch(error => {
      console.error('Server Error', error)
    });
  }

  handleNewSmurf = newSmurfs => {
    this.setState({ smurfs: newSmurfs})
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={ routeProps =>
        <Smurfs {...routeProps} smurfs={this.state.smurfs}/> } />
        <Route exact path='/' render={ routeProps =>
        <SmurfForm {...routeProps} handleNewSmurf={this.handleNewSmurf}/> } />
      </div>
    );
  }
}

export default App;
