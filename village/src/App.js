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

////_________ask why updateVillage(){}___or why this is even needed___ doesnt work///
  updateVillage = (newVillage) => {
    {this.setState({
      smurfs: newVillage
    })}
  }

  componentDidMount(){
    axios.get(url).then(res => {
      console.log(res)
      this.setState({
        smurfs: res.data,
      })
    }).catch(err => console.log(err))
  }

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
