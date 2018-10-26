import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';

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

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(response => this.setState({
        smurfs: response.data,
        newSmurf: {
          name: '',
          age: '',
          height: ''
        }  
    }))
      .catch(error => console.log(error));
  }

  handleInputChange = e => {
    this.setState({ 
      newSmurf: {
        ...this.state.newSmurf,
      [e.target.name]: e.target.value 
      }
    });
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm 
          newSmurf={this.state.newSmurf}
          handleInputChange={this.handleInputChange}
          addSmurf={this.addSmurf}/>
        <Smurfs 
          mySmurfs={this.state.smurfs}
          onPageLoad={this.componentDidMount} />
        <Route exact path='/' component={Smurfs}/>
        <Route path='/smurf-form' component={SmurfForm} />
      </div>
    );
  }
}

export default App;
