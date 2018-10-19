import React, { Component } from 'react';
import SmurfCard from './SmurfCard';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToSmurf = (id) => {
    this.props.history.push(`/smurf/${id}`)
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfCard
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                goToSmurf={this.goToSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

SmurfCard.defaultProps = {
 smurfs: [],
};

export default Smurfs;
