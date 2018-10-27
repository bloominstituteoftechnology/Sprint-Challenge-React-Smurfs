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
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  goodbyeSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <NavLink to="/">Smurfs</NavLink>
        <NavLink to="/smurf-form">Add a Smurf</NavLink>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              goodbyeSmurf={this.goodbyeSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
