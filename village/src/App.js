import React, { Component } from 'react';
import axios from 'axios';
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
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
  axios.get('http://localhost:3333/smurfs')
  .then((response) => {
    // console.log(response);
    this.setState({smurfs: response.data});
  })
  .catch((error) => {
    console.log(error);
  })
  }

  addSmurf = event => {
    const {name, age, height} = this.state;
   event.preventDefault();
   // add code to create the smurf using the api
   axios.post('http://localhost:3333/smurfs',{name, age, height})
   .then((response) => { 
    console.log(response);
     this.setState({smurfs: response.data, name: ' ', age: ' ', height: ' '});      
   })
   .catch((error) => {
     console.log("Error posting", error);
   })
 }  

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  render() {
    return (
      <div className="App">
        <Smurfs smurfs={this.state.smurfs} />
        <SmurfForm addSmurf={this.addSmurf} handleInputChange={this.handleInputChange} name={this.state.name} age={this.state.age} height={this.state.height}   />
      </div>
    );
  }
}

export default App;
