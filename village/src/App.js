import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'
import Header from './components/Header'

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

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data}))
    .catch(error => console.log(error));
}


  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <Route path="/" render={() => <Header /> } />
        <NavLink to="/smurfs">I just wanna see the Smurfs</NavLink>
        <Route path="/smurfs" render={() => (
          <SmurfForm updateSmurfs={this.updateSmurfs}/> )} />
        <Route path ="/smurfs" render ={() => 
          <Smurfs smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
