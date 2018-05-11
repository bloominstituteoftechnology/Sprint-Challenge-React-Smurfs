import React, { Component } from 'react';
import Smurf from './Smurf';
const axios = ('axios')

class Smurfs extends Component {

  deleteSmurf = event => {
    event.preventDefault(); 
    let id = event.target.value;
    axios
    .delete(`/smurfs/${id}`)
    .then(response => {
      console.log(response)
      })
    .catch(err => {
      console.log("You have failed to exile the smurf from the village")
    })
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
                onClick={this.deleteSmurf}

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
