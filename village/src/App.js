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
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){ 
    this.getAllSmurfs();
  }

  getAllSmurfs = () =>{
    axios
      .get('http://localhost:3333/smurfs')
      .then(response=>{
        console.log(response.data)
        this.setState({smurfs:response.data})
      })
      .catch(error=>console.log(error))
  }

  addNewSmurf = smurf =>{
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response=>{
        this.setState({smurfs:response.data})
      })
      .catch(error=>console.log(error))
  }

  render() {
    return (
      <div className="App">
        <SmurfForm  addNewSmurf={this.addNewSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
