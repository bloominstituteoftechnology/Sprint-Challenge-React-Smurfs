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
    if(smurfData==='ok'){
      this.getSmurfData();
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/smurf-form'>Add New Smurf</NavLink>

        <Route exact path={'/'} render={()=><Smurfs smurfs={this.state.smurfs}/>}></Route>
        <Route path={'/smurf-form'} render={props=><SmurfForm {...props}/>}></Route>
      </div>
    );
  }
}

export default App;
