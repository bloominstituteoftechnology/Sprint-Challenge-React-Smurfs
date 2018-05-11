import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    this.updateInfo();
  }

  updateInfo = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => { 
        this.setState({smurfs: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        {/* <SmurfForm updateInfo={this.updateInfo}/>
        <Smurfs smurfs={this.state.smurfs} /> */}
        <Route exact path="/" render={(props) => (
            <SmurfForm {...props} updateInfo={this.updateInfo} />  )}/>
        <Route exact path = "/smurfs" render={(props) => (
            <Smurfs {...props} updateInfo={this.updateInfo} smurfs={this.state.smurfs} />  )}/>
      </div>
    );
  }
}

export default App;
