import React, { Component } from 'react';
import{Link} from 'react-router-dom'
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {

    console.log("i ran")
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
            
              <Link to={`/smurf/${smurf.id}`}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;
