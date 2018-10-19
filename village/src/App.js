import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf : {
        name: '',
        age : '',
        height : '',
      },
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({smurfs : response.data}))
      .catch(error => console.log(error));
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state.newSmurf)
    .then(response => this.setState({smurfs : response.data}))
    .catch(error => console.log(error));

    this.setState({newSmurf : {
      name: '',
      age: '',
      height: '',
    }});
    alert("Smurf Has been Added!")
  }
  
  deleteSmurf = (e,id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({smurfs : response.data}))
      .catch(error => console.log(error));
      alert("Smurf Deleted");
  }

  handleInputChange = e => {
    this.setState(
      {newSmurf : { 
        ...this.state.newSmurf,
        [e.target.name]: e.target.value 
      }});
      // console.log(this.state.newSmurf);
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <SmurfForm 
                newSmurf = {this.state.newSmurf}
                addSmurf = {this.addSmurf}
                handleInputChange = {this.handleInputChange}
        /> */}
        <Route path='/smurf-form' render={props=> 
        <SmurfForm
        newSmurf = {this.state.newSmurf}
        addSmurf = {this.addSmurf}
        handleInputChange = {this.handleInputChange}/>
      }/>
        <Route exact path='/' render={props=><Smurfs deleteSmurf={this.deleteSmurf} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
