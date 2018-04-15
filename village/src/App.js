import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  }
  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadSmurfs} />
        <Smurfs
          smurfs={this.state.smurfs}
          onDelete={this.removeSmurf}
          onUpdateName={this.updateName}
          onUpdateAge={this.updateAge}
          onUpdateHeight={this.updateHeight}
        />
      </div>
    );
  }

  componentDidMount() {
    this.loadSmurfs();
    this.addSmurf();
    this.removeSmurf();
    // this.updateName();
    // this.updateAge();
    // this.updateHeight();
  }

  //Get the 411 on smurfs
  loadSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({
        smurfs: response.data,
      });
    })
    .catch(error => {
      console.error('error getting data');
    });
  }

  //Add a smurf to the village
  addSmurf = () => {
    axios
    .post('http://localhost:3333/smurfForm')
    .then(response => {
      this.setState({
        smurfs: response.data,
      });
    })
    .catch(error => {
      console.error('ERROR ADDING SMURF (error getting data)');
    });
  }

  //nuke the smurf
  removeSmurf = id => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
      .delete(endpoint)
      .then(response => {
        console.log('response from delete', response);
        this.setState({ smurfs: response.data });
      })
      .catch(() => {
        console.error('error deleting');
      });
  };

//update the smurf's dossier
  updateName = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    return axios
      .put(endpoint, smurf.name)
      .then(response => {
        console.log('response from update', response);
        this.setState({ smurfs: response.data });
      });    
  };

  updateAge = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    return axios
      .put(endpoint, smurf.age)
      .then(response => {
        console.log('response from update', response);
        this.setState({ smurfs: response.data });
      });    
  };
  updateHeight = smurf => {
    const endpoint = `http://localhost:3333/smurfs/${smurf.id}`;
    return axios
      .put(endpoint, smurf.height)
      .then(response => {
        console.log('response from update', response);
        this.setState({ smurfs: response.data });
      });    
  };
}

export default App;
