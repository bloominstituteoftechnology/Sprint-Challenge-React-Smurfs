import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {

  render(props) {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id} key={smurf.id} deleteSmurf={this.props.deleteSmurf} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;