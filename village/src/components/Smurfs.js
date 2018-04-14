import React, { Component } from 'react';


import Smurf from './Smurf';
import axios from 'axios';

export default class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      Smurfs:[]
    }
  }

  componentDidMount() {
      this.fetchSmurfs()
  }

  fetchSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ Smurfs: response.data })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
