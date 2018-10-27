import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
    constructor(props)  {
        super(props)
        this.state  =   {
            smurfs: this.props.smurfs,
        }
    }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.filter(smurf   =>  {
              if(this.props.match.params.id)    {
                  return smurf.id === parseInt(this.props.match.params.id, 10);
              }
              return smurf
          }).map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                updateSmurfs={this.props.updateSmurfs}
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
