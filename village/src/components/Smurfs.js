import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
              smurf={smurf}
            
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                handleData={this.props.handleData}
                toggleEdit={this.props.toggleEdit}
                showEdit={this.props.showEdit}
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
