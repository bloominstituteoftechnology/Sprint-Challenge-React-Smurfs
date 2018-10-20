import React, { Component } from 'react';

import { Link } from 'react-router-dom';


import Smurf from './Smurf';


import './smurf.css';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className='h1'>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={Math.random() * 3}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <div className="divbtn" key={Math.random() + 1} id={smurf.id} onClick={this.props.deleteSmurf}>Delete</div>
                <Link to='/update'><div className="divbtn" key={Math.random() + 2 * 30} id={smurf.id} onClick={this.props.updateSmurf}>Update</div></Link>
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
