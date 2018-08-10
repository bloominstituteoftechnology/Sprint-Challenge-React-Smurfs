import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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

  getSmurfs() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      this.setState({ smurfs: response.data })
    })
    .catch(error => {
      console.log(error)
    });
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Header {...props} />} />
        <Route path="/smurfs/" render={props => <SmurfForm {...props} />} />
        <Route path="/smurfs/" render={props => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
