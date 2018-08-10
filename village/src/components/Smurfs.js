import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfvillage">  
        <h1 className="villageTitle">Smurf Village</h1>
        <div>
          <div className="Smurfs">
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
          </div>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
