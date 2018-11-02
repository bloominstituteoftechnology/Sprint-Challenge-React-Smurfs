import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';


class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
      
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
 
  
  // componentDidMount(){
  //   axios
  //   .get('http://localhost:3333/smurfs')
  //   .then(response => {
  //     this.setState({ smurfs: response.data }))
  //   .catch(error => console.log(error))
  // }


componentDidMount(){
  axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(err => {
        console.error('Error', err);
      });
}

//Troubleshooting
//check link


deleter = id => {
  console.log(id)
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => { console.log(response)
    this.setState({
      smurfs: response.data
    })
  }).catch(event => console.log(event))
}




  render() {
    console.log("app render", this.state.smurfs)
    return (
      <div className="App">
      <h1>Smurf Village</h1>
        <SmurfForm />
    <div>{this.state.smurfs.map(each => <Smurfs data={each} key={each.id} deleter={this.deleter} />)} </div>
      </div>
    );
  }
}

export default App;
