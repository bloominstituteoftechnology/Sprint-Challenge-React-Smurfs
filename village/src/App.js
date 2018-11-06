import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Link, NavLink} from 'react-router-dom'
import Smurf from './components/Smurf'

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
    .get('http://localhost:3333/smurfs')
    .then((result) => {
      console.log('Server Response: ', result)
      this.setState({
        smurfs: result.data
      })
      
    }).catch((err) => {
      console.log(err)
    });
  }

  delete = (smurfId) => {
      axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then((result) => {
        console.log('Server Response: ', result)
        this.setState({
          smurfs: result.data
        })
        
      }).catch((err) => {
        console.log('Error: ', err)
        
      });
    }
    

  addSmurf = (event, objct) => {
   event.preventDefault();
   // const newSmurf = {name: this.state.name, age: this.state.age, height: this.state.height}
   axios
   .post('http://localhost:3333/smurfs')
   .then(result => {
    this.setState({
     smurfs: result.data 
    })
   })
   // add code to create the smurf using the api
 }



  render() {
    return (
      <div className="App">
      <NavLink to='/'>Smurfs</NavLink>
      {' '}

      <NavLink to='/smurf-form'>Smurf Form</NavLink>
      
      <Route path='/smurf-form' render={() => <SmurfForm 

      addSmurf={this.addSmurf}

      />} />
      
      <Route exact path='/' render={() => 
      
      <Smurfs
      smurfs={this.state.smurfs} 
      delete={this.delete} />} />
      
      <Route exact path='/:id'  
      render={() => 
      
      <Smurf
       // array passed as prop
       />} />
      </div>
    );
  }
}

export default App;
