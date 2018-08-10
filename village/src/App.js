import React, { Component } from 'react';
import axios from "axios";
import { Route, } from "react-router-dom";

import Header from './components/Header';

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
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(error => {
        console.log(error);
      })
    }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header}/>

        <Route path='/add' component={SmurfForm}/>

        <Route path='/smurfs' render={props => (
          <Smurfs smurfs={this.state.smurfs}/>
        )}/>
      </div>
    );
  }
}


export default App;
