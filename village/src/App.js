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
      error: null,
      name: '',
      age: '',
      height: ''
    }
  }

  loadSmurf = () => {
    const endpoint = "http://localhost:3333/smurfs";
    axios
    .get(endpoint)
    .then(response => {this.setState({smurfs: response.data})})
    .catch(error => {this.setState({error: error})})
  }

  addSmurf = (smurf) => {
    const endpoint = `http://localhost:3333/smurfs`;
   axios
   .post(endpoint, smurf)
   .then(response => {this.loadSmurf()})
   .catch(error => { console.log(error)})
  }

  updateSmurf = (id, smurf) => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
    .put(endpoint, smurf)
    .then(response => {this.loadSmurf()})
    .catch(error => {console.log(error)})
  }

  deleteSmurf = (id) => {
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
    .delete(endpoint)
    .then(response => {this.loadSmurf()})
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.loadSmurf();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} loadSmurf={this.loadSmurf} />
        <h1>Smurf Village</h1>
        <ul className="Smurfs">
        { this.state.smurfs.map((smurf) => {
          return <Smurfs name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id}  id={smurf.id} delete={this.deleteSmurf} update={this.updateSmurf} />;
        })}
      </ul>
      </div>
    );
  }
}

export default App;
