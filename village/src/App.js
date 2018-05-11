import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
     
    };
  }
  componentDidMount(){
    const getSmurfs = axios.get('http://localhost:3333/smurfs'); 
    //this resolves into a Promise
    getSmurfs
        .then(response =>{
          this.setState({smurfs:response.data});
        })
        .catch(err =>{
          console.log(err);
        });
  }

  
    
  
  

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {Header} />
          <Route path = '/smurfs' render = {props => {
            return (
            <div>
              <br/><br/>
              <SmurfForm {...props} addSmurf = {this.state.addSmurf} />
              <Smurfs {...props} smurfs={this.state.smurfs}/>
              
            </div>
            )
          }} />
          </Switch>
        
        {/* 
        <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
