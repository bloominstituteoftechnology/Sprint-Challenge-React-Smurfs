import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: '',
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
      this.setState({ smurfs: res.data });
    })
    .catch( error => console.error(error))
  }

  addSmurf(event) {
    event.preventDefault();
    const smurf = {};
    smurf.name = this.state.name;
    smurf.age = this.state.age;
    smurf.height = this.state.height;
    console.log('adding a smurf')

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        console.log(`smurfs: ${this.state.smurfs}`);
      })
      .catch(error => console.error(error))
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  deleteSmurf(event) {
    const id = event.target.value;
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    axios
    .delete(endpoint)
    .then(res => {
      this.setState({ smurfs: res.data });
    })
    .catch(error => console.error(error))
  }

  updateSmurf(event) {
    event.preventDefault();
    const id = event.target.value;
    const endpoint = `http://localhost:3333/smurfs/${id}`;
    const smurf = {};
    smurf.name = this.state.name;
    smurf.age = this.state.age;
    smurf.height = this.state.height;
    axios
    .put(endpoint, smurf)
    .then(res => {
        console.log(res.data.name)
        console.log(res.data.age)
        console.log(res.data.height)
    })
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <SmurfForm
          addSmurf={this.addSmurf}
          updateName={this.updateName}
          updateAge={this.updateAge}
          updateHeight={this.updateHeight}
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
        />
        <Smurfs 
          smurfs={this.state.smurfs}
          deleteSmurf={this.deleteSmurf}
          updateSmurf={this.updateSmurf}
        />
      </div>
    );
  }
}

export default App;
