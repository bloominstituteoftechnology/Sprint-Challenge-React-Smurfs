import React, { Component } from 'react';
import Header from './components/Header';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = ('http://localhost:3333/smurfs')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get(url)
    .then (response => {
      this.setState(() => ({smurfs: response.data}));
    })
    .catch(err => {
      console.error('Uh Oh!');
    });
  }


  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
