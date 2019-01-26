import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SmurfsWrapper } from '../styles/smurfStyles';
import Smurf from './Smurf';

class Smurfs extends Component {

  render() {
    return (
      <SmurfsWrapper>
        <h1>Smurf Village</h1>
        {this.props.loading ? <h2>Loading Smurfs!</h2> : null}
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                id={smurf.id}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                updateSmurf={this.props.updateSmurf}
              />
            );
          })}
        </ul>
        <Link to='/smurf-form'>Add Smurf</Link>
      </SmurfsWrapper>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
