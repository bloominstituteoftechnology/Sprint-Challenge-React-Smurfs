import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs: [],
  };

  componentDidMount() {
    this.loadSmurfs();
  }

  loadSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({
        smurfs: response.data,
      });
    })
    .catch((error) => {
      console.error(`Error nabbing up smurfs: ${error}`);
    });
  };

  killSmurf = id => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {this.loadSmurfs()})
    .catch((error) => {
      console.error(`Couldn't execute smurf due to error: ${error}`)
    });
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return (
              <li key={smurf.id}>
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
                <button onClick={() => {this.killSmurf(smurf.id);}}>Execute smurf</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;