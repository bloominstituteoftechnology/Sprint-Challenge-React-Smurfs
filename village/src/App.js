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
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    this.getSmurfs();
  }
  addSmurfOnCreate = (smurfs) => {
    this.getSmurfs();
  }
  getsmurf = () => {
    axios 
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
      }) 
      
      //added catch
      .catch(err => {
        console.log(err);
  })  
  }  
  deleteSmurf = id => {
    axios.delete('http://localhost:3333/smurfs/${id}')
      .then(response => {
        this.getsSmurfs();
      })
    
      .catch(err => {
        console.log(err);
      });
  };  
  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        
    < SmurfForm addSmurfsOnCreate={this.addSmurfsOnCreate} />
        <  Smurfs deleteSmurf={this.deleteSmurf}smurfs={smurfs} />
      </div>
    );
  }
}

export default App;
