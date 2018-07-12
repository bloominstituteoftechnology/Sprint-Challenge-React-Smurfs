import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  
  saveSmurfData() {
    const smurfs = { name: this.state.name, height: this.state.height, age: this.state.age };
    axios
    .post(`http://localhost:3333/smurfs`, smurfs)
    .then(saveSmurfs => {
      console.log(saveSmurfs);
    }) 
    .catch(err => {
      console.log(err);
    })
    this.setState( { name: '' , age: '', height: ''  })
  }

  render() {
    return (
      <div className="App">
        <SmurfForm/>
        <Smurfs/>
      </div>
    );
  }
}

export default App;
