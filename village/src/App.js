import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

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

  // GET data from the server and putting it on state
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
         .then(res => {
           this.setState({
             smurfs: res.data,
           })
         })
         .catch(err => console.log(err))
  }

  // getting rid of the need to refresh the page when navigating back from the form.
  componentDidUpdate() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data,
      })
    })
    .catch(err => console.log(err))
  }

  // grabbing ID from selected smurf and sending DELETE to server. Then updating the data on state.
  deleteHandler = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState({
        smurfs: res.data,
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>See All Smurfs</NavLink>
          <NavLink to='/smurf-form'>Add New Smurf</NavLink>
        </nav>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteHandler={this.deleteHandler}/>} />
        <Route exact path="/smurf-form" render={props => <SmurfForm {...props} />} />
      </div>
    );
  }
}

export default App;
