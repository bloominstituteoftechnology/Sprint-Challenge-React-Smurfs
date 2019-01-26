import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar/NavBar';
import EditSmurfForm from './components/EditSmurf/EditSmurf';

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

   deleteASmurf = id =>{
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response=>{
        this.setState({smurfs: response.data})
      })
      .catch(error=>console.log(error))
   }

   editSmurf = (smurf,id) =>{
    axios
      .put(`http://localhost:3333/smurfs/${id}`,smurf)
      .then(response=>{
        this.setState({smurfs: response.data })
      })
      .catch(error=>console.log(error))
   }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={props=> <Smurfs smurfs={this.state.smurfs} deleteASmurf={this.deleteASmurf} editSmurf={this.editSmurf} />} />
        <Route path="/smurf-form" render={props=> <SmurfForm  addNewSmurf={this.addNewSmurf}/>} />
        <Route exact path="/smurf-form-edit" render={props=> <EditSmurfForm {...props} editSmurf={this.editSmurf}/>} />
      </div>
    );
  }
}

export default App;
