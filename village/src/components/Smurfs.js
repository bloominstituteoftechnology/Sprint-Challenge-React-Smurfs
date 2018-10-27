import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import axios from 'axios';

class Smurfs extends Component {

 constructor() {
   super();
  this.state= {
    smurfs: [],
  };
 }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => this.setState({smurfs: response.data}))
}


deleteSmurf = event => {
  event.preventDefault();
  // add code to create the smurf using the api
  let smurfId = event.target.id;
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`, this.state.smurfs)
    .then(response => {
      this.setState({
        smurf: response.data
      });
      window.location.reload();
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
              < i className="fas fa-trash" style={{cursor:'pointer', color: 'blue'}} id={smurf.id} onClick={this.deleteSmurf}></i>
              </div>
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
