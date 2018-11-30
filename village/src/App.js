import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

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
      .get(url)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err);
      });

  }

  render() {
    return (
      <div className="App">

        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/SmurfForm">Add Your New Smurf</NavLink>
        </div>
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
