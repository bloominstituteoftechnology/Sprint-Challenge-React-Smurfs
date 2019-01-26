import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    this.fetchSmurfs();
  }
  fetchSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Route 
          path="/" 
          component={NavBar} 
        />
        <Route 
          exact 
          path="/" 
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} fetchSmurfs={this.fetchSmurfs} />} 
        />
        <Route 
          path="/smurf-form" 
          render={props => <SmurfForm {...props} fetchSmurfs={this.fetchSmurfs} />} 
        />
      </div>
    );
  }
}

export default App;
