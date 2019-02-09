import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
         .then(res=>{
            this.setState(()=>({smurfList:res.data}));
         })
         .catch(error=>{
           console.error('Error',error);
         })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <Route exact path="/" component={Smurfs}/>
       <Route path="/smurf-form" component={SmurfForm}/>
       <Route exact path="/smurf-form"component={SmurfForm}/>
       <Nav/>
      </div>
    );
  }
}

export default App;
