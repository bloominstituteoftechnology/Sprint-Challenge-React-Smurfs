import React, { Component } from 'react';
import Axios from 'axios';
import {Route} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Location from './components/NavBar';

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
   Axios.get('http://localhost:3333/smurfs')
   .then(response => this.setState({
     smurfs: response.data
   })
   )
   .catch(err => console.log('error', err))
 }






//  <Route path="/">
//  <NavBar />
// </Route>


  render() 
          {
    return (
        <div className="App">
          
  <Location />
          <Route 
            path="/smurf-form"           
            render={props => (          
              <SmurfForm addSmurf={this.addSmurf} />
          )}>
          </Route>
  
          <Route 
            exact 
            path="/" 
            render={props => (
              <Smurfs {...props} smurfs={this.state.smurfs} />
          )}>
          </Route>
  
        </div>
    );
  }
}

export default App;
