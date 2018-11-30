import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <Link to="/smurf-form"><h1>Smurf Village</h1></Link>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                smurf={smurf}
                key={smurf.id}
                deleteItem={this.props.deleteItem}
                updateStart={this.props.updateStart}
                history={this.props.history}
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
