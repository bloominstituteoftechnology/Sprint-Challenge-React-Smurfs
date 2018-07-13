import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import Header from './components/Header';

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
      .catch(error => console.log('error: ', error));
  }

  handleSetSmurf = smurf => {
    this.setstate({ smurfs: smurf });
  }

  linkToVillage = () => {

  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} linkToVillage={this.linkToVillage}/>
        <Route path='/smurf-village' component={SmurfForm} setSmurfState={this.handleSetSmurf}/>
        <Route path='/smurf-village' component={Smurfs} smurfs={this.state.smurfs}/>
      </div>
    );
  }
}

export default App;

