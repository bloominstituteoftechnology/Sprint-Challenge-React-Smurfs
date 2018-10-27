import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {

  render() {
    console.log('ID', this.props.match.params.id);
    const selectedSmurf = this.props.smurfs[this.props.match.params.id];
    console.log('selectedSmurf', selectedSmurf);
    if (selectedSmurf !== undefined) {
      return (
        <div className='Smurfs'>
          <Smurf
            name={selectedSmurf.name}
            id={selectedSmurf.id}
            age={selectedSmurf.age}
            height={selectedSmurf.height}
          />
          <Link to='/'>Back to the Smurf list</Link>
        </div>
      )
    }
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/smurf/${smurf.id}`}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </Link>
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
