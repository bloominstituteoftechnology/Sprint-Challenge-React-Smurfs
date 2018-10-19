import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import NavBar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then((response) => this.setState({smurfs: response.data}) )
      .catch((error) => console.log(error))

  }

  newSmurf = (smurfData) => {
    this.setState({smurfs: smurfData})
  }

  deleteSmurf = (e, id) => {
    console.log(id)
    e.preventDefault()
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((response) => this.setState({smurfs: response.data}))
    .catch((error)=> console.log(error))


  }

  // changeHandler = (e) => {
  //   console.log(e.target.value)
  //   // this.setState({newSmurf: {...this.state.newSmurf, [`${e.target.name}`]: e.target.value}})

  // }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <NavBar />
       <Route path='/smurf-form' render={(props) => <SmurfForm {...props} newSmurf={this.newSmurf}/>} />
       <Route exact path={'/'} render={(props) => <Smurfs {...props} deleteSmurf={this.deleteSmurf}smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
