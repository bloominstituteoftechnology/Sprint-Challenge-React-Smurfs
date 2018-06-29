import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Video from './components/Video';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
  this.getData();
  }

  getData = () => {
        axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response.data);
      this.setState({smurfs: response.data}) 
    })
    .catch(err => {
          console.log(err, 'what happened to the smurfs?')
        })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Route exact path = '/' component ={Header} />
        <Route path = '/village' render={props=> {
          return (
          <div>
            <h1>Welcome to the smurf village!</h1> 
    <Link to='/video'><button style={{width:'200px', height:'120px', fontSize:'28px', borderRadius:'5px', backgroundColor:'red', color:'white', border:'none', padding:'10px', outline:'none', cursor:'pointer'}}>I'm ready to leave, this place sucks.</button>
    </Link>
      <br/><br/>
             <SmurfForm getData = {this.getData.bind(this)}  />
             <Smurfs smurfs={this.state.smurfs} />
          </div>
          )
        }} />
        <Route exact path ='/video' component ={Video} />
       
      </div>
    );
  }
}

export default App;
