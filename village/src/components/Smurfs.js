import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li key = {smurf.id}><Link to = {`/smurfs/${smurf.id}`}>
                <Smurf 
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                /></Link>
                </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
<Route path = {`/smurfs/:id`} component = {Smurf}/>
Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;