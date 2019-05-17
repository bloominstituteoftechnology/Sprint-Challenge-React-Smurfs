import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

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

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
         
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
        <NavLink exact to={`/smurfs/${this.state.smurfs.id}`}>
         
        </NavLink>
        
      <Route
        exact
        path="/"
        render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      
      <Route 
      path="/smurf-form"
      component={SmurfForm} />
      
      </div>
    );
  }
}

export default App;
