import React, { Component } from 'react';
import { Route , Switch, } from 'react-router-dom';
import axios from 'axios';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
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
  render() { //on the SmurfForm - this.state.... is how state is passed down to other components
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {Header} />
           <Route path = {`/smurfs/:id`} component = {Smurf}/>
          <Route path = '/smurfs' render = {props => {
            return (
            <div>
              <br/><br/>
            <SmurfForm {...props} addSmurf = {this.state.addSmurf} /> 
              <Smurfs {...props} smurfs={this.state.smurfs}/>
              
            </div>
            
            )
          }} />
          <Route component = {FourOhFour}/>
          </Switch>
      </div>
    );
  }
}

const FourOhFour = () => {
  return (
    <div>
      <h1>Oh no! You've done smurfed it up! Return back to the village!</h1>
      <p> HTTP 404</p>
      <button><a href = '/'>Go back to the village!</a></button>
    </div>
  )
}
export default App;
