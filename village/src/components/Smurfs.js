import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';

class Smurfs extends Component {
  state = {
    smurfs: [],
  }

  // componentDidMount
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => this.setState({ smurfs: [ ...data ] }));
  }
  
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
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
