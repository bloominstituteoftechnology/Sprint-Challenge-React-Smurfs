import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  }


  componentDidMount() {
    this.getRequest();

  }

  getRequest = () => {

    axios
      .get('http://localhost:3000/smurfs')
      .then(response => {
        this.setState({ smurfs: response });
      })
      .catch(error =>
      {console.log("Error", error.response)
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.getRequest} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
