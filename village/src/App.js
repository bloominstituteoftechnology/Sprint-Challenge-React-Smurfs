import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data })
      })
    }

  deleteSmurf = (event, id) => {
    event.preventDefault()
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <NavLink exact to='/' className='nav-link' activeClassName='active-nav-link'>Home</NavLink>
          <NavLink exact to='/smurfs' className='nav-link' activeClassName='active-nav-link'>Smurf Village</NavLink>
          <NavLink exact to='/smurf-form' className='nav-link' activeClassName='active-nav-link'>Add a Smurf!</NavLink>
        </div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/smurf-form' render={ props => ( <SmurfForm {...props} smurfs={this.state.smurfs}/> )}/>
        <Route exact path='/smurfs' render={ props => ( <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/> )} />
      </div>
    );
  }
}

export default App;
