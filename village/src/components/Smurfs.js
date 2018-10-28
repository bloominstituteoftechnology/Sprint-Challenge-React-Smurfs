import React, { Component } from 'react';

import Smurf from './Smurf';
import { Link } from 'react-router-dom';


class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (

               <Link to={`/smurfs/${smurf.id}`}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                smurfs={this.props.smurfs}
                smurf = {smurf}
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
