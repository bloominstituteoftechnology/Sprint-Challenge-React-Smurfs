import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

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
    const endpoint = 'http://localhost:3333/smurfs';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({smurfs: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink  to='/smurf-form'>
              Add Smurf
            </NavLink>
            <NavLink exact to='/'>
              Smurfs
            </NavLink>
          </div>
        </nav>
        <Route path='/smurf-form' render={props => <SmurfForm
        {...props}
        />} />
        <Route  exact path='/' render={props => <Smurfs 
        {...props}
        smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
