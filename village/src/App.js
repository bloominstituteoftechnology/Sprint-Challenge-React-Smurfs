import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  updateSmurfs = (newSmurfs) => {
    this.setState({ smurfs: newSmurfs });
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs:response.data }))
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header}/>
        <Route path='/smurfs' render={(props) => <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />} />
        <Route path='/smurfs' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
