import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


// Routes needed:
// '/' aka home page
// '/smurf-form' 
//  nav bar using NavLink

class App extends Component {
  
 
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <ul className='NavBar'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/smurf-form'>Smurf Form</Link>
        </li>
      </ul>

       <Route exact path='/smurf-form' component={SmurfForm} />
  
       <Route exact path='/' component={Smurfs}/>
       
        
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
