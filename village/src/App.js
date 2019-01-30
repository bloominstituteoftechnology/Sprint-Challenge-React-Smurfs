import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };

    this.addSmurf = this.addSmurf.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data});
        console.log(this.state, "smurfs");
      })
  }

  addSmurf = event => {
    // add code to create the smurf using the api
    axios.post("http://localhost:3333/smurfs", this.state)
      .then(response => {
        this.setState({...this.state, smurfs: response.data})
      })
      .catch(error => {
        console.error(error);
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/village" render={(props) => <Smurfs smurfs={this.state.smurfs} addSmurf={this.addSmurf} handleInputChange={this.handleInputChange}/>} />
          <Route path="/village/:id" component={Smurf} />
        </Switch>
      )
  }
}


export default App;