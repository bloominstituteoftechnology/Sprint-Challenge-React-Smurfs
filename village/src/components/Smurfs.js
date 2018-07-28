import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurfington Citizens</h1>
        <Link to="/">Home</Link>
        <SmurfForm setSmurf={this.props.setSmurf} setErrorHandler={this.props.setErrorHandler}/>
        <ul>
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
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
