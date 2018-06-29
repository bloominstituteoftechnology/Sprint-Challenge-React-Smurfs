import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
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
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Navigation}/>
        <Route exact path='/' component={Home}/>
        <Route path='/add' component={SmurfForm}/>
        <Route path='/smurfs' render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)} />
      </div>
    );
  }
}

export default App;
