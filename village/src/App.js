import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
// import NavBar from './components/NavBar';

// Routes needed:
// '/' aka home page
// '/smurf-form' 
//  nav bar using NavLink

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount = () => {
    axios.get('http://localhost:3333/smurfs')
    .then (response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log(err);
    })
  };

 
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

       <Route path='/smurf-form' component={SmurfForm} />
       <SmurfForm />
       <Route exact path='/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
       
        
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
