import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error))
  }
  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/smurf-form'>Add A New Smurf</NavLink>
        <Route path='/smurf-form' render={() => <SmurfForm />} />
        <Route path='/'render={() => <Smurfs smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
