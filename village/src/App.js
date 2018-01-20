import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: [],
      errorMessage: '',
    };
  }

  loadSmurfs = () => {
    const endpoint='http://localhost:3333/smurfs'
    axios.get(endpoint)
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => {
        this.setState({ errorMessage: 'No Smurfs to be found.'});
      });
  }

  componentDidMount() {
    this.loadSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm refresh={this.loadSmurfs}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
