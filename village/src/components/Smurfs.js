import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.smurfs)
  }

  componentDidMount() {
    // const id = this.props.match.params.id;
    // console.log(id);
  }

  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
          <div className="smurfs2">
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  age={smurf.age}
                  height={smurf.height}
                  id={smurf.id}
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