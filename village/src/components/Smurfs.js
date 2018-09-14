import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Smurf from './Smurf';
import './Smurfs.css';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        <div className='smurf-cards'>
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
        </div>
        <div className='link-div'>
        <Link to='/' style={{textDecoration: 'none', color: 'blue'}}>Leave the Smurf Village</Link>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
