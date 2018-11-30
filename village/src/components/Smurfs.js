import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className='smurf-wrapper' key={smurf.id}>
                <div onClick={ () => this.props.history.push(`/smurf/${smurf.id}`)} className='smurf'>
                  <h2>{smurf.name}</h2>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                </div>
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
