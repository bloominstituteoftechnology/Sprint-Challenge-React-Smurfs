import React, { Component } from 'react';
import Axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

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
  getSmurfData(){
    Axios.get('http://localhost:3333/smurfs')
    .then(res => this.setState({smurfs:res.data}))
    .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getSmurfData();
  }

  handleAddNewSmurf = smurfData =>{
    this.getSmurfData();
  }
  handleDeleteSmurf = (event,id) =>{
    event.preventDefault();
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then(res => this.setState({smurfs:res.data})) //could have called getSmurfData but i am avoiding the extra api call.
         .catch(error => console.log(error))
    
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/smurf-form'>Add New Smurf</NavLink>

        <Route exact path={'/'} render={()=><Smurfs smurfs={this.state.smurfs} handleDeleteSmurf={this.handleDeleteSmurf}/>}></Route>
        <Route path={'/smurf-form'} render={props=><SmurfForm {...props}  handleAddNewSmurf={this.handleAddNewSmurf}/>}></Route>
      </div>
    );
  }
}

export default App;
