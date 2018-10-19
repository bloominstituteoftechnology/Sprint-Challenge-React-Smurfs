import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      url: 'http://localhost:3333'
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    const { url, smurfs } = this.state;
    if (!smurfs.length) {
      axios
        .get(`${url}/smurfs`)
        .then(res => this.updateSmurfs(res.data))
        .catch(err => console.log(err));
    }
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  // DELETE SMURFS
  deleteSmurf = id => {
    const { url } = this.state;
    axios
      .delete(`${url}/smurfs/${id}`)
      .then(res => this.updateSmurfs(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <NavLink exact to="/">
            Smurfs
          </NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm updateSmurfs={this.updateSmurfs} {...props} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
