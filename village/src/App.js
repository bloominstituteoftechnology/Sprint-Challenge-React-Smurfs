import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 15%;
    margin: 0 auto;
`

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
  componentDidMount()    {
      axios.get(`http://localhost:3333/smurfs`)
      .then(data    =>  this.setState((state)   =>  ({
          smurfs: data.data
      })))
      .catch(err    =>  {
          console.log("In Catch", err);
      })
  }

  updateSmurfs  =   (newSmurfList)  =>  {
      this.setState((state) =>  ({
          smurfs: newSmurfList.data,
      }))
  }

  render() {
    return (
      <div className="App">
        <NavBar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smurf-form">Add Smurf</NavLink>
        </NavBar>
        <Route exact path="/" render={()    =>  <Smurfs smurfs={this.state.smurfs} updateSmurfs={this.updateSmurfs}/>} />
        <Route path="/smurf-form" render={()    =>  <SmurfForm updateSmurfs={this.updateSmurfs}/>}  />
      </div>
    );
  }
}

export default App;
