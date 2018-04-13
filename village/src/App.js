import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Edit from './components/SmurfEdit';
class App extends Component {
  constructor(){
    super()
    this.state ={
      smurfs: [],
    }
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    console.log('i mounted')
    this.updateGet()
    }
    updateGet =() =>{
    console.log('i worked')
     axios
      .get('http://localhost:3333/smurfs')
      
      .then(response => {
        this.setState({smurfs: response.data})
      
      })
      .catch(err =>{
        console.log(err);
    
      })
    }
    handleTextInput = element => {
      this.setState({ [element.target.name]: element.target.value });
    };

    deleteSmurf = smurfId =>{
      axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response =>{
          this.updateGet();
      })
      .catch(err =>{
          console.log(err);
      });
    };
    


  render() {

    return (
      <div className="App">
      { <Route exact path ="/"
       render ={props =><SmurfForm smurfs={this.state.smurfs} handleTextInput={this.handleTextInput} updateGet={this.updateGet}{...props}/>}
       />}
     { <Route exact path ="/"
      render ={props=>  <Smurfs smurfs={this.state.smurfs} updateGet={this.updateGet} deleteSmurf={this.deleteSmurf} {...this.state} />} 
      />}

  
       
      </div>
    );
  }
}

export default App;
