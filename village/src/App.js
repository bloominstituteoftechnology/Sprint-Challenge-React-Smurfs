import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';

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
    axios.get('http://localhost:3333/smurfs')
    .then(response=>{
      this.setState({
        smurfs: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }

  addSmurf = (smurf)=>{
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response=>{
      this.setState({
        smurfs: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })

    // Return to home page
    const home = window.location.href.toString().replace('smurf-form', '')
    window.location.assign(home)
  }

  deleteSmurf = (id)=>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response=>{
      this.setState({
        smurfs: response.data
      })
    })

    const home = window.location.href.toString().replace(`${id}/`, '')
    window.location.assign(home)
  }

  findSmurf = (id)=>{
    return this.state.smurfs.find(smurf=>`${smurf.id}` === id);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <h1>The Smurfs</h1>
          <Link to="smurf-form">Add Smurf</Link>
        </div>

        <Route exact path="/" render={(props)=><Smurfs smurfs={this.state.smurfs}/>}/>
        <Route path="/smurf-form" render={(props)=><SmurfForm addSmurf={this.addSmurf}/>}/>
        <Route strict path="/:id/" render={(props)=><Smurf {...props} {...this.findSmurf(props.match.params.id)} deleteSmurf={this.deleteSmurf} delete/>}/>
      </div>
    );
  }
}

export default App;
