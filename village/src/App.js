import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
let url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  updateVillage(newVillage){
    console.log(newVillage)
    console.log()
    {this.setState({
      smurfs: newVillage
    })}
    console.log(this.state.smurfs)
  }

  componentDidMount(){
    axios.get(url).then(res => {
      console.log(res)
      this.setState({
        smurfs: res.data,
      })
    }).catch(err => console.log(err))
  }

  updateVillage(newVillage){
    console.log(newVillage)
    console.log()
    {this.setState({
      smurfs: newVillage
    })}
    console.log(this.state.smurfs)
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm  updateVillage={this.updateVillage}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
