import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then( response => {
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err));
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createSmurfHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3333/smurfs`, {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then( response => {
      this.setState({ 
        smurfs: response.data,
        name: '',
        age: '',
        height: '',
       })
    })
  };

  deleteSmurfHandler = (id) => {
    return () => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then( response => this.setState({
          smurfs: response.data
        }))
        .catch(err => console.log(err));
      }
    }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/smurf-form" render={(props) => <SmurfForm 
          inputHandler={this.inputHandler} 
          createSmurfHandler={this.createSmurfHandler}
          name={this.state.name}
          age={this.state.age}
          height={this.state.height}
          smurfs={this.state.smurfs} /> } />

        <Route exact path="/" render={(props) => <Smurfs 
                                                    smurfs={this.state.smurfs}
                                                    deleteSmurfHandler={this.deleteSmurfHandler} />} />
      </div>
    );
  }
}

export default App;
