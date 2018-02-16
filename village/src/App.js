import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfList: [],
  }
  render() {
    return (
      <div className="App">
        <SmurfForm onSubmission={this.loadSmurfs} />
        <Smurfs smurfList={this.state.smurfList} />
      </div>
    );
  }

  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {this.setState({ smurfList: response.data })})
      .catch(error => console.error(error));
  };

}

export default App;
