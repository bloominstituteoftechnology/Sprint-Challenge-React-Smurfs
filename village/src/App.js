import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: []
  };

  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadSmurfs}/>
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }

  deleteSmurf = (id) => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
    .delete(endpoint)
    .then(response => {
      console.log(response);
      this.loadSmurfs();
    })
    .catch(error => {
      console.log(error)
    })
  }

  loadSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      this.setState({smurfs: response.data});
    })
    .catch(error => {
      console.log('There was an error');
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      this.setState({smurfs: response.data});
    })
    .catch(error => {
      console.log('There was an error');
    });
  }
}

export default App;
