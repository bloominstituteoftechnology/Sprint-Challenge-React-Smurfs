import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { smurfs: [] };
    this.url = 'http://localhost:3333/smurfs';
  }

  componentDidMount() {
    this.getSmurfs(this.url);
  }

  getSmurfs = URL => {
    axios
      .get(URL)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} updateSmurfs={this.getSmurfs} URL={this.url} />}
        />
      </div>
    );
  }
}

export default App;
