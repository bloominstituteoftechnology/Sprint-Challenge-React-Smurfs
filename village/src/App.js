import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';



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
  componentDidMount=()=>{
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data})
        console.log(this.state.smurfs)
      })
  }
  deleteSmurfHandler = (id) =>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response =>{
        this.setState({
          smurfs: response.data
        })
      })
    }
  render() {
    return (
      <div className="App">
      <NavLink exact to='/' >All the Smurfs</NavLink>
      <NavLink to='/add-a-smurf' >Add-A-Smurf</NavLink>

        <Route exact path='/' render={props=>(<Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurfHandler}/>) } />
        <Route path='/add-a-smurf' component={SmurfForm}/>
        <Route path='/smurf/:id' render={props=>(
          <Smurf {...props} smurfs={this.state.smurfs} />
        ) }/>
      
      </div>
    );
  }
}

export default App;