import React, { Component } from 'react';
import Smurf from './Smurf';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Link to="/"><Button>Home</Button></Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                handleDelete={this.props.handleDelete}
                key={smurf.id}
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
