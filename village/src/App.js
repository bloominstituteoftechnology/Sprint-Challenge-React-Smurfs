import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const baseUrl = 'http://localhost:3333';
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
    this.getSmurfs()
  }

  getSmurfs() {
    axios.get(`${baseUrl}/smurfs`)
      .then(res => this.setState({ smurfs: res.data}))
      .catch(err => console.log(err))
    console.log(true)
  }
 
  deleteSmurf = (e, smurfId) => {
    e.preventDefault()
    axios.delete(`${baseUrl}/smurfs/${smurfId}`)
      .then(res => this.setState({
        smurfs: res.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className='navigation'>
          <NavLink onClick={() => this.getSmurfs()}to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>Add Smurf</NavLink>
        </div>
        <Route exact path='/' render={props => <Smurfs {...props} getSmurfs={this.getSmurfs} smurfs={this.state.smurfs} baseUrl={baseUrl} deleteSmurf={this.deleteSmurf} /> }/>
        <Route path='/smurf-form' render={props => <SmurfForm {...props} baseUrl={baseUrl} smurfs={this.state.smurfs} getSmurfs={this.getSmurfs}/>}/>
      </div>
    );
  }
}

export default App;
