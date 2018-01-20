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
      errorMessage: '',
    };
  }

  addSmurfs = () => {
    const endpoint = 'http://localhost:3333/smurfs';
    axios
      .get(endpoint)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        this.setState({ errorMessage: 'What Smurfs?' });
      });
  };

  deleteSmurf = id => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log(response.data);
        this.addSmurfs();
      })
      .catch(error => {
        this.setState({ errorMessage: 'Failed to delete smurf' });
      });
  };

  componentDidMount() {
    this.addSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm refresh={this.addSmurfs} />
        <Smurfs smurfs={this.state.smurfs} delete={this.deleteSmurf} />
      </div>
    );
  }
}

export default App;
