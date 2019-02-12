import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [{
        name: '',
        id: '',
        age: '',
        height: '',
        key: ''
      }],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data });
    })
    .catch(err => {
      throw new Error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">
            Bienvenidos
          </NavLink>
          <NavLink to="/smurfs">
            El Village Grande
          </NavLink>
          <NavLink to="/smurf-form">
            Add A Smurf
          </NavLink>
        </nav>

        <Route 
          exact path ="/" 
          component={Header}
        />
        <Route
          exact path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} />}
        />
      </div>
    );
  }
}




export default App;


