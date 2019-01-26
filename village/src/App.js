import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink, withRouter } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'

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
   axios.get('http://localhost:3333/smurfs')
   .then(response => {
     console.log(response)
     this.setState({ smurfs: response.data })
   })
   .catch(error => {
     console.log('server error', error)})
 }
 
 addToSmurfForm = smurf => {
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(response => {
      console.log(response)
      this.setState({ smurfs: response.data })
})
  .catch(error => {
      console.log('Server Error', error)})
 }

 deleteSmurf = (id) => {
   axios.delete(`http://localhost:3333/smurfs/${id}`)
   .then(response => this.setState({ smurfs: response.data}))
 }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" className="activeNavButton">Smurfs</NavLink>
          </li>
          <li>
            <NavLink to="/smurf-form" className="activeNavButton">Form</NavLink>
          </li>
        </ul>

        <Route exact path="/smurf-form" render={props=> <SmurfForm addToSmurfForm={this.addToSmurfForm} {...props} />} />
        <Route path="/" render={props => <Smurfs smurfs={this.state.smurfs} {...props}/>} />
        <Route path="/smurfs:id" render={props => <Smurf {...props} smurfs={this.state.smurfs} deleteSmurf ={this.deleteSmurf} />} />
      </div>
    );
  }
}

export default withRouter(App);
