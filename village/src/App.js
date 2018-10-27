import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, Link, NavLink} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response.data);
        this.setState({ smurfs: response.data })
      })
    }
    
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/">Smurfs </NavLink>
        --<NavLink to="/smurf-list"> Add Smurf</NavLink>
      
        <Route path = '/smurf-list' render={(props) => <SmurfForm {...props} />}/>
        <Route path = '/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurfHandler={this.deleteSmurfHandler}  />}/>
      </div>
    );
  }
}

export default App;
