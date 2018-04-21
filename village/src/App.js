import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    }
  }
  componentDidMount() {
    axios 
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        this.setState({smurfs: response.data});
      })
      .catch((error) => {
        console.log('Server Error', error);
      });
  }
  addSmurfToServer = (smurf) => {
    axios
      .post('htttp://localhost:3333/smurfs', smurf)
      .then(response => {
        this.setState({smurfs: response.data});
      })
      .catch(err => console.log(err));
  }
  deleteSmurfFromServer = (id) => {
    axios 
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        // response.data = {SmurfRemoved: {smurfRemoved data}}
        const removedSmurf = response.data.SmurfRemoved;
        const smurfsArray = this.state.smurfs.filter((item) => {
          return item.id !== removedSmurf.id;
        })
        this.setState({smurfs: smurfsArray});
        // get our entire smurfs array from state
        // iterate over the array finding the deleted smurf
        //remove smurf from array
        //set state with new array of smurfs
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Smurfs smurfs={this.state.smurfs} deleteSmurfFromServer={this.deleteSmurfFromServer}/>
        <SmurfForm addSmurfToServer={this.addSmurfToServer}/>
      </div>
    );
  }
}

export default App;
