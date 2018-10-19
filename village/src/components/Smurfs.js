import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
    
  // deleteItem = (id) => {
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${id}`)
  //     .then(response => {
  //       this.defaultProps({ smurfs: response.data });
  //       // props.history.push('/');
  //     })
  //     .catch(error => console.log(error));
  // };
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
