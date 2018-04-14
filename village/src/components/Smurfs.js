import React, { Component } from 'react';
import axios from 'axios';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  constructor() {
    super()
    this.state = {
      smurfs: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        this.setState({smurfs: response.data})
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
              </li>
            )
          })}
        </ul>
        <SmurfForm />
      </div>
    )
  }
}


export default Smurfs;
