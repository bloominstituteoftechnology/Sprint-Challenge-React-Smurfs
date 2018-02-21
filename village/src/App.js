import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
    state = {
        smurfs:[],
    }
componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data,
        });
      })
      .catch(() => {
        console.error('error getting data');
      });
      console.log(this.state.smurfs);
};

removeSmurf = id => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
        .delete(endpoint)
        .then(response => {
            console.log(response);
            this.setState({smurfs: response.data });
        })
        .catch(() => {
            console.error('error deleting');
        });
};


  render() {
    return (
      <div className="App">
      <SmurfForm onCreate={this.loadSmurfs} />
        <Smurfs smurfs={this.state.smurfs} onDelete={this.removeSmurf} />
      </div>
    );
  }
}

export default App;
