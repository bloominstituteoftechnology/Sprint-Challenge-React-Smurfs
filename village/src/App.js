import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfNav from './components/SmurfNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
  componentDidMount = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({
        smurfs: response.data
      })
    })
    .catch(err => console.log(err));
  }

  updateState = (newState) => {
    this.setState({
      smurfs: newState
    })
  }

  render() {
    return (
      <div className="App">
      <SmurfNav />
      <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      <Route path="/smurf-form" render={props => <SmurfForm {...props} updateState={this.updateState} />} />
        {/* <SmurfForm updateState={this.updateState} /> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
