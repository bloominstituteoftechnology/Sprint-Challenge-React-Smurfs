import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import SmurfCard from './components/SmurfCard';
import Smurfs from './components/Smurfs';
// import Smurf from './components/Smurf';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      errorMessage: null
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
         .then(response => {
            this.setState({
                smurfs: response.data,
                errorMessage: null
            });
         })
         .catch( error =>
              this.setState({errorMessage: "Error: There is some error getting smurfs"})
         );
  }

  addSmurf = (smurf) => {
  
    // add code to create the smurf using the api
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(response => {
        this.setState({
            smurfs: response.data
        });
    })
    .catch(err => console.log(err));
    console.log("working");
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        {this.state.errorMessage !== null ? (<h3>{this.state.errorMessage}</h3>) : null}
        <nav>
         <NavLink to='/'>Show Village</NavLink>
         {"   |  "}        
        <NavLink to='/smurf-form'>Add a Smurf</NavLink>
       </nav>
        <Route path = "/smurf-form" render = { props => <SmurfForm {...props} addSmurf={this.addSmurf} /> } />
        {/* <SmurfForm addSmurf={this.addSmurf} /> */}
        <Route exact path ="/" render = { props => <Smurfs smurfs ={this.state.smurfs} /> } />
        {/* <Smurfs smurfs={this.state.smurfs} />
      */}
        <Route path = "/smurfs/:id" render={ props => <SmurfCard {...props} smurfs={this.state.smurfs} />} />
       </div>
    );
  }
}

export default App;
