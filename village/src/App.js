import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response)
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addSmurf = event => {
    event.preventDefault();
    const myObj = { name: this.state.name, age: Number(this.state.age), height: this.state.height }
    axios 
      .post('http://localhost:3333/smurfs', myObj)
      .then(response => {
        console.log(response)
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  


  render() {
    return (
      <div className="App">
        <NavLink className='Links' exact to='/smurf-form' activeStyle={
          {color: 'red'}
        }>Smurf Form</NavLink>
        <NavLink className='Links' exact to='/' activeStyle={
          {color: 'red'}
        }>Smurfs</NavLink>
        <Route  path='/smurf-form' render={props => <SmurfForm {...props} addSmurf={this.addSmurf} name={this.state.name} age={this.state.age} height={this.state.height} handleInputChange={this.handleInputChange} />} />
        <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;
//<SmurfForm />
//<Smurfs smurfs={this.state.smurfs} />