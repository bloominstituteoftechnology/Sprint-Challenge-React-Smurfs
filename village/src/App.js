import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F52C07;
  min-height: 80px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: 0,
      height: 0,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then( res => {
        console.log('Response', res);
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log('Server error >>', err));
      
  }

  deleteSmurf = id => {
    console.log('deleteSmurf triggered')
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          friendsData: res.data
        });
      })
      .catch(err => console.log(err));
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar>
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurf-form">Add a new smurf!</NavLink>
        </NavBar>
        {/* <SmurfForm /> */}
        <Route
          exact path="/" 
          render={ props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path="/smurf-form" 
          render={ props => (
            <SmurfForm
              {...props}
            />
          )}
        />

      </div>
    );
  }
}

export default App;
