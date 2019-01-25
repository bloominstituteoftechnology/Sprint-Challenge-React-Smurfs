import React, { Component } from 'react';
import Smurf from './Smurf';
import {Link} from "react-router-dom";

class Smurfs extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Smurfs">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link key={smurf.id} to={`/smurf/${smurf.id}`}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
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
