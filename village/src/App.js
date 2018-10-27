import React, { Component } from 'react';
import SmurfForm from './components/SmurfForm';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import {NavLink} from "react-router-dom";
import Smurfs from './components/Smurfs';
import axios from '../node_modules/axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {this.setState({smurfs: response.data})})
    .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='Main'>
      <nav>
        <NavLink activeClassName='selected' className='nav' exact to='/'>
          Smurf Village
        </NavLink>

         <NavLink activeClassName='selected'  className='nav' to='/smurf-form'>
          Join the Clan!
        </NavLink>
      </nav>
      <div className="App">
        <Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route exact path='/smurf-form' render={(props) => <SmurfForm className='form' {...props} smurfs={this.state.smurfs}/>} />
        <Route exact path="/smurf-form" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
      </div>
    )
  }
}

