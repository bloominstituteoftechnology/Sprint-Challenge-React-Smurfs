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
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      this.setState({ smurfs: response.data })
    })
    .catch(error => {
      console.error(error);
    });
  }

  addSmurf = () => {
    const smurf = {
      name: this.state.formText.name,
      age: this.state.formText.age,
      height: this.state.formText.height
    };
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(smurf => {
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
    this.resetFormText();
  };

  updateSmurf = id => {
    const smurf = {};
    if (this.state.formText.name !== "") smurf.name = this.state.formText.name;
    if (this.state.formText.age !== "") smurf.age = this.state.formText.age;
    if (this.state.formText.height !== "") smurf.height = this.state.formText.height;
    axios
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
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.resetFormText();
        this.getSmurfs();
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  handleInputChange = e => {
    const { formText } = this.state;
    formText[e.target.name] = e.target.value;
    this.setState({ formText: formText });
  };

  resetFormText = () => {
    this.setState({ formText: { name: '', age: '', height: '' }});
  };

  render() {
    return (
      <div className="App">
        <SmurfForm 
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
