import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom';

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
    axios
    .get(`http://localhost:3333/smurfs`)
    .then( res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => console.log(err))
  }

  removeSmurf = id => {
    axios
      .delete(`http://localhost:5000/smurfs/${id}`)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error('Oh no!', error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className='Nav'>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
          <NavLink to="/smurfs" activeClassName="activeNavButton">
            Smurfs
          </NavLink>
          <NavLink to="/smurf-form" activeClassName="activeNavButton">
            Add New
          </NavLink>
        </div>
        <Route
        exact path="/smurf-form"
        component={SmurfForm}
        />
        <Route path="/smurfs"
         render={props => (
          <Smurfs
          {...props}
          smurfs={this.state.smurfs}
          removeSmurf={this.removeSmurf}
        />
        )}/>
      </div>
    );
  }
}

export default App;
