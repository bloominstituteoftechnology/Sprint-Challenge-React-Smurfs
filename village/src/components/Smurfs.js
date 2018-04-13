import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';


class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    }
  }

  componentDidMount() {
    this.deletingSmurf();
  }

  deletingSmurf = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data})
      console.log(response);
    })
    .catch(error => {
      console.log(`Error fetching Smurfs: ${error}`);
  });
};

  deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => {
        this.deletingSmurf();
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <button onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
