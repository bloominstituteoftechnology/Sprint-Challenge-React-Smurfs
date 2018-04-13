import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(error => console.log(error))
  }

  updateSmurfList = newList => {
    this.setState({smurfs: newList});
  }

  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfList={this.updateSmurfList} />
        <Smurfs updateSmurfList={this.updateSmurfList} {...this.state}/>
      </div>
    );
  }
}

export default App;
