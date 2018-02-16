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
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    
  }
  
  render() {
    return (
      <div className="App">
        <SmurfForm age={this.state.age} height={this.state.height} name={this.state.name} updateName={this.updateName} 
        updateAge={this.updateAge} updateHeight={this.updateHeight} addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>
      </div>
    );
  }
  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data});
      })
      .catch(error => {
        console.log(error);
      })
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

  addSmurf(event) {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
    .post('http://localhost:3333/smurfs', this.state)
    .then(response => {
    console.log(response);
    this.loadSmurfs();
  })
    .catch(error => {
      console.error('Server Error', error)
    });
    console.log('smurf was added')
    this.setState({
      name: '',
      age: '',
      height: '',
    })
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

}

export default App;
