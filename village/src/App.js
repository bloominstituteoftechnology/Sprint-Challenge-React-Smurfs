import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

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
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err));
  }

  newSmurf = (data) => {
    axios.post(('http://localhost:3333/smurfs', data))
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err));
  }

  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
  }

  render() {
    return (
      <div className="App">
        <nav className = 'navbar'>
          <li><NavLink to = '/smurf-form'>Smurf Form</NavLink></li>
          <li><NavLink to = '/'>Our Village</NavLink></li>
          <br />
        </nav>
        <Route path = '/smurf-form' component = {SmurfForm} />
        <Route exact path = '/'
               render = { () => <Smurfs smurfs = {this.state.smurfs} deleteSmurf = {this.deleteSmurf} />
             }
        />
      </div>
    );
}
}
export default App;

// this is the old code from before NavLink added, kept it here in case of an error with NavLink

// return (
//   <div className="App">
//     <div className = 'navbar'>
//     <Route exact path = '/' component = {Header} />
//     <Route exact path = '/smurfs'
//            render = {props => (
//              <Smurfs {...props} smurfs = {this.state.smurfs}
//              />
//            )}
//     />
//     <Route exact path = '/smurfs' component = {SmurfForm} />
//   </div>
