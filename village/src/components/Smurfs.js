import React, { Component } from 'react';


import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('smurf props', this.props)
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div>
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
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
