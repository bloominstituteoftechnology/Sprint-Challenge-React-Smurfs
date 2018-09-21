import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }
 
  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs/`)
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log('Error', err);
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm smurfs={this.state.smurfs}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
