import React, { Component } from 'react';
import './smurf.css';
import Smurf from './Smurf';
import smurfImage from '../images/smurf.svg'

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className="imageContainer">
          <img alt="jumping smurf" src={smurfImage} />
        </div>

        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                removeSmurf={this.props.removeSmurf}
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
