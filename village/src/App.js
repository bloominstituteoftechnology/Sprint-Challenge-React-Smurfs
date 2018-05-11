import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  updateSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

    componentDidMount() {
        this.updateSmurfs();
      }
  
  render() {
    return (
      <div className="App">
        <Route exact path ='/' component={Header}/>
        <Route path = '/smurfs' component={SmurfForm}/>
        <Route path= '/smurfs' render= {props => (<Smurfs {...props} smurfs={this.state.smurfs} />)} />
      </div>
    );
  }
}

export default App;
