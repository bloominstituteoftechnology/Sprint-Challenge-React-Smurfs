import React, { Component } from 'react';
import '../App.css';
import Smurf from './Smurf';

import { Link } from 'react-router-dom';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="smurfs-cards">
          {this.props.smurfs.map(smurf => {
            return (
              <Link className="Smurf" to={`/smurfs/${smurf.id}`} key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  deleteSmurf={this.props.deleteSmurf}
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
