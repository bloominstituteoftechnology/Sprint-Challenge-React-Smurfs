import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
      .then(results => {
        console.log(results)
        
        this.setState({smurfs: results.data})
    })
}

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurfs => {
            return (
              <Smurf
                key={smurfs.id}
                name={smurfs.name}
                id={smurfs.id}
                age={smurfs.age}
                height={smurfs.height}
                
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
 };

export default Smurfs;
