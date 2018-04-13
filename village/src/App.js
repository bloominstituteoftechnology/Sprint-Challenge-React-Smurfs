import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();

    // We are storing all state in App since our components rely on each other
    this.state = {
      smurfs: [],
      formText: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs() {
    axios // Grab data from server
    .get(`http://localhost:3333/smurfs`)
    .then(response => { // Use data to update state and rerender page
      this.setState({ smurfs: response.data })
    })
    .catch(error => {
      console.error(error);
    });
  }

  addSmurf = () => {
    // Use form data to create new smurf object
    const { name, age, height } = this.state.formText; 
    const smurf = { name, age, height };
    axios // Post new smurf object to server
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(smurf => {
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
    this.resetFormText();
  };

  updateSmurf = id => { // Update existing smurf using id as reference
    const smurf = {}; // Only set data if something was input
    if (this.state.formText.name !== "") smurf.name = this.state.formText.name;
    if (this.state.formText.age !== "") smurf.age = this.state.formText.age;
    if (this.state.formText.height !== "") smurf.height = this.state.formText.height;
    axios // Update data on server
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(response => {
        this.resetFormText();
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = id => {
    axios // Remove data from server
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.resetFormText();
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  handleInputChange = e => { // Use input event target to set state
    const { formText } = this.state;
    formText[e.target.name] = e.target.value;
    this.setState({ formText: formText });
  };

  resetFormText = () => { // Reset state values (used when data is submited)
    this.setState({ formText: { name: '', age: '', height: '' }});
  };

  render() {
    return (
      <div className="App">
        <SmurfForm // Pass down function from App.js
          addSmurf={() => this.addSmurf()}
          formText={this.state.formText}
          handleInputChange={e => this.handleInputChange(e)}
          resetFormText={() => this.resetFormText()}
        />
        <Smurfs smurfs={this.state.smurfs}
          updateSmurf={this.updateSmurf}
          deleteSmurf={this.deleteSmurf}
        />
      </div>
    );
  }
}

export default App;
