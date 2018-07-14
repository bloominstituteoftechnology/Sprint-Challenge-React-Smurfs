import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'

import Header from './components/Header';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import './App.css';

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
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        // oops we caught an error.
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route path="/" component={Header} />
          <Route path="/" component={SmurfForm} />

          <Smurfs smurfs={this.state.smurfs} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
