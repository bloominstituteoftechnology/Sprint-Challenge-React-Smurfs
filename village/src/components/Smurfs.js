import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props){
    super(props);
    this.state = {
      deleteSmurf: props.deleteSmurf,
    }
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
                deleteSmurf={this.state.deleteSmurf}
              />
            );
          })}
        </ul>
        <Link to='/'><button>Leave</button></Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
