import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  }




  getRequest = () => {
    const data =
      axios
        .get('http://localhost:3333/smurfs')
        .then((response) => {
          console.log('data', response.data);
          this.setState({ smurfs: response.data });
        })
        .catch((error) => {
          console.log("Error", error.response)
        });
  }
  componentDidMount() {
    this.getRequest();

  }
  render() {
    return (
      <div className="App">
        <SmurfForm onUpdate={this.getRequest} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
