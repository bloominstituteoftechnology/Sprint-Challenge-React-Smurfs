import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const blankFormValues = {
  name: "",
  age: 0,
  height: ""
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: "",
        age: 0,
        height: ""
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [event.target.name]: event.target.value,
      }
    });
  }

  handleAgeChange = event => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        age: Number(event.target.value),
      }
    });
  }

  handleAddSmurf = event => {
    event.preventDefault();
    console.log("Adding new smurf.");

    axios.post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(response => this.setState({ smurfs: response.data, newSmurf: blankFormValues }))
  }

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <Smurfs
          smurfs={this.state.smurfs}
          newSmurf={this.state.newSmurf}
        />
        <SmurfForm
          smurfs={this.state.smurfs}
          newSmurf={this.state.newSmurf}
          handleChange={this.handleChange}
          handleAgeChange={this.handleAgeChange}
          addNewSmurf={this.handleAddSmurf}
        />
      </div>
    );
  }
}

export default App;