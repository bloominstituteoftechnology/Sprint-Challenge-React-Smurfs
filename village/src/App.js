import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, Link, NavLink} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: '',
        age: '',
        height: ''

      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  addSmurf = (smurf) => {
    axios.post('http://localhost:3333/smurfs', smurf)
         .then(response => {
           this.setState({ smurfs: response.data})})
  }

  handleInput = (e) => {
    this.setState({newSmurf: {
                   [e.target.name]: e.target.value 
    }})
  }
  componentDidMount(){
        axios.get('http://localhost:3333/smurfs')
             .then(response => this.setState({smurfs: response.data}));
  }

  render() {
    return (
      <div className="App">
      <nav><NavLink to='/'>Home</NavLink><NavLink to='/addSmurf'>Add Smurf</NavLink></nav>
      
      <Route exact path='/' render={props =>
                      <Smurfs {...props}smurfs={this.state.smurfs} />
      } />
        
      <Route path='/addSmurf' render={props =>
                              <SmurfForm 
                              {...props}
                              handleInput={this.handleInput} 
                              newSmurf={this.state.newSmurf}
                              addSmurf={this.addSmurf} />
       }/>
        
      </div>
    );
  }
}

export default App;
