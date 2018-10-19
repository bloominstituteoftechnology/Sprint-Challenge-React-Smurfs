import React, { Component } from 'react';
import axios from 'axios'
import Smurf from './Smurf';

class Smurfs extends Component {

  deleteSmurf = e =>{
    let id = e.target.id
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(window.location.reload())
  }
  render() {
   
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
              
              deleteSmurf={this.deleteSmurf}
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
