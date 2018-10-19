import React, { Component } from 'react';
import axios from 'axios';

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

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfs={this.updateSmurfs} URL={this.url} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
