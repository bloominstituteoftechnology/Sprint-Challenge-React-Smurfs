import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    let smurfs;
    if(this.props.smurfs[0]&&this.props.smurfs[0]=='single'){
      smurfs = this.props.location.state.smurf
    }else{
      smurfs = this.props.smurfs
    }
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteASmurf={this.props.deleteASmurf}
                editSmurf={this.props.editSmurf}
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
