import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
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

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then( res => { this.setState({ smurfs: res.data })
    })
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <Route path='/smurfs' component={SmurfForm} smurfs={this.state.smurfs} />
        <Route path='/smurfs' render={ 
          props => (<Smurfs {...props} smurfs={this.state.smurfs} />)} />
      </div>
    );
  }
}

export default App;
