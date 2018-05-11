import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {

  handleRemoveSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {console.log(res.status)})
        .catch(err => console.log(err))

    window.location.reload();
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
                handleRemoveSmurf={this.handleRemoveSmurf}
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