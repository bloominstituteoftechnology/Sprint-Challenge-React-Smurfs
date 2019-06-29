import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log('error', err));
  }

  updateSmurfs = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/smurf-form">New</Link>
        </nav>
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props}updateSmurfs={this.updateSmurfs} />}
        />
        <Route exact path="/" render={<Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
