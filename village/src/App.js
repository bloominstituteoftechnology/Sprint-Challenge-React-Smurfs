import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount (){
    axios
    .get('http://localhost:3333/smurfs')
    .then(reponse=>{
      this.setState({
        smurfs: reponse.data,
      })
    })
    .catch(err=> console.log(err))

  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route path= '/Smurfs' render={props => <Smurfs {...props} smurfs = {this.state.smurfs} />} />
        <Route path = '/SmurfForm' component = {SmurfForm} />
      </div>
    );
  }
}

export default App;