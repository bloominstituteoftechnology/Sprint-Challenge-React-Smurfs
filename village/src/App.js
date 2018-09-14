import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';



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
    axios.get('http://localhost:3333/smurfs').then(res=>this.setState({smurfs: res.data})).catch(err=>console.log(err));
  }
  render() {
    return (
      <div className="App">
        <nav>
        <NavLink className="Homer" to="/"> Home</NavLink>
        <NavLink className= "Smurfss" to='/Smurfs'>Smurfs</NavLink>
        <NavLink className= "SmurfsForm" to='/smurfsform'> SmurfsForm</NavLink>
        </nav>
        <Route exact path='/' component={Header}/>
        <Route exact path='/smurfsform' component={SmurfForm}/>
        <Route exact path='/smurfs' render={(props)=>
      <div {...props}>
            
            <Smurfs smurfs={this.state.smurfs} />
          </div> }/>
      </div>
    );
  }
}

export default App;
