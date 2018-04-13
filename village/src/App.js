import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };

    this.formAttributes = {
      buttonText: "Add a new Smurf!",
      action: this.formSubmitAction
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(error => console.log(error))
  }

  updateSmurfList = newList => {
    this.setState({smurfs: newList});
  }

  // Create new smurf
  formSubmitAction = data => {
    axios.post("http://localhost:3333/smurfs", data)
      .then(response => {
        this.updateSmurfList(response.data);
      })
      .catch((error => console.log(error)));
  }

  render() {
    return (
      <div className="App">
        <SmurfForm updateSmurfList={this.updateSmurfList} formAttributes={this.formAttributes} />
        <Smurfs updateSmurfList={this.updateSmurfList} {...this.state}/>
      </div>
    );
  }
}

export default App;
