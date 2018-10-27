import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';
import AlertToggle from './components/AlertToggle'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurfAlert: false,
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
      .then(response => this.setState({ smurfs: response.data, smurfAlert: false }))
  }

  

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(response => this.setState({
        smurfs: response.data,
        smurfAlert: false,
        newSmurf: {
          name: '',
          age: '',
          height: ''
        }  
    }))
      .catch(error => this.smurfAlert(error));
  }

  smurfAlert = () => {
    this.setState({
      smurfAlert: true
    })
  }

  smurfAlertOff = () => {
    this.setState({
      smurfAlert: false
    })
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
        <div className="navbar">
          <NavLink exact to='/'>
            <h3>Visit Smurf Village</h3>
          </NavLink>
          <NavLink to='/smurf-form'>
            <h3>Add Smurf!</h3>
          </NavLink>
        </div>  
        <AlertToggle 
          smurfAlert={this.state.smurfAlert}
          smurfAlertOff={this.smurfAlertOff} />
        <Route 
          exact path='/' 
          render={props => (
           <Smurfs 
            {...props}
            mySmurfs={this.state.smurfs} />
          )}/>
        <Route 
          path='/smurf-form'
          render={props => (
            <SmurfForm 
              {...props}
              newSmurf={this.state.newSmurf}
              handleInputChange={this.handleInputChange}
              addSmurf={this.addSmurf}
              smurfAlert={this.state.smurfAlert}/>
          )}  />
      </div>
    );
  }
}

export default App;
