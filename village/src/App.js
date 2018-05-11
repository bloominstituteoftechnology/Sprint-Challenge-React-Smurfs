/**
 * STEPS:
 * Add: GET, POST and PUT request.
 * MONT: Header.js
 * Lookup: for an API that delivers a JSON list with snurfs.
 * SETUP: Router, Routes and Links.
 */


import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import axios from 'axios';
import {Route} from 'react-router-dom';

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
    this.getSmurfs();
  }
  
  getSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then( res => {console.log(res.data); return res.data} )
    .then( data => {
      this.setState({ smurfs: data.reverse() });
    } )
    .catch( e => console.log(e) );
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <SmurfForm getSmurfs={this.getSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
