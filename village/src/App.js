import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      loading: false,
      updatedSmurf: {}
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    this.setState({loading: true});
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({smurfs: res.data, loading: false});
    })
    .catch(err => {
      console.log(err);
      this.setState({loading: false});
    })
  }

  updateList = (smurfList) => {
    this.setState({smurfs: smurfList});
  }

  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      this.setState({smurfs: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  setUpdatedSmurf = (id, smurf) => {
    smurf.id = id;
    this.setState({updatedSmurf: smurf});
  }

  updateSmurf = (smurf) => {
    axios.put(`http://localhost:3333/smurfs/${this.state.updatedSmurf.id}`, smurf)
    .then(res => {
      this.setState({smurfs: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route 
          exact
          path="/smurf-form" 
          render={ (props) => 
            <SmurfForm 
              updateList={this.updateList} 
              {...props}/>} 
        />
        <Route 
          path="/smurf-form/:info" 
          render={ (props) => 
            <SmurfForm 
              updateSmurf={this.updateSmurf} 
              info={this.state.updatedSmurf}
              {...props}/>} 
        />
        <Route exact 
          path="/" 
          render={(props) => 
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs} 
              loading={this.state.loading} 
              deleteSmurf={this.deleteSmurf}
              updateSmurf={this.setUpdatedSmurf} />} 
        />
      </div>
    );
  }
}

export default App;
