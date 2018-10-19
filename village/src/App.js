import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'

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
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error))
  }

  addToSmurfs = smurf => {
    this.setState({ smurfs: smurf})
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={props => {
          return (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )
        }} />
        <Route path="/smurf-form" render={props => {
          return (
            <SmurfForm {...props} addToSmurfs={this.addToSmurfs} />
          )
        }} />
      </div>
    );
  }
}

export default App;
