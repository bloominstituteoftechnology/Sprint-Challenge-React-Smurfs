import React, { Component } from 'react';
import axios from 'axios';   // added
import {Route, NavLink} from 'react-router-dom';   // added NavLink


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

  componentDidMount () {
    axios
      .get('http://localhost:3333/smurfs')
      .then (response => {
        this.setState({smurfs: response.data});
        console.log(response);
      })
      .catch(error => console.log('ERROR: ', error));
  }





  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink exact to = '/' activeClassName = 'active_NavButton'> Home </NavLink>
          </li>
          <li>
            <NavLink to = '/smurf-form' activeClassName = 'active_NavButton'> Add smurf</NavLink>
          </li>
        </ul>


        <Route path = '/smurf-form' render = {props => <SmurfForm {...props} /> }   />
        <Route exact path = '/' render = {props => <Smurfs {...props}  smurfs={this.state.smurfs} /> } />


      </div>
    );
  }
}

export default App;
