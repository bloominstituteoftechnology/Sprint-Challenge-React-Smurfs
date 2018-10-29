import React, { Component } from 'react';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { NavLink } from 'react-router-dom';



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
componentDidMount() {
  axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      const smurfs = response.data;
      this.setState({smurfs});
    })
    .catch(err=> {
      console.log(err)
    });
}

  render() {
    return (
      <Router>
      <div className="App">
      <NavLink to = '/smurfs'>Smurfs</NavLink>
      <NavLink to = '/'>Home</NavLink>
        <Route exact path ="/" component = {Smurfs}/>
        <Route path='/smurfs' render={(props) => {return (
          <div>
            <Link to='/'>Home</Link>
            <SmurfForm createSmurf={this.createSmurf}/>
            <Smurfs smurfs={this.state.smurfs} />
          </div>
        )}}/>
       </div>
       </Router>
     );
   }
 }

export default App;
