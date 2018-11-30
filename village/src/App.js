import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from "react-router-dom";

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
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response)
        this.setState({ smurfs: response.data })
      })
      .catch(err => console.log(err))
  }

  addSmurf = data => {
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', data)
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div className="App">
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/smurf-form">Form</NavLink>
      </nav>
        <Route 
          exact path="/" 
          render={props => <Smurfs {...props} smurfs={this.state.smurfs}  /> }
        />
        <Route 
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
