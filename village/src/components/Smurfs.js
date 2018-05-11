import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  displaySmurfs = () => {
    let displayArray = [...this.props.smurfs];

    if (this.props.query !== "all") {
      displayArray = displayArray.filter(smurf => {
        return smurf.id === Number(this.props.query);
      });
    }

    return displayArray.map(smurf => {
      return (
        <Smurf
          name={smurf.name}
          id={smurf.id}
          age={smurf.age}
          height={smurf.height}
          key={smurf.id}
          update={this.props.update}
        />
      );
    });
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        {this.props.children}
        <ul>
          {this.displaySmurfs()}
          {/* {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                update={this.props.update}
              />
            );
          })} */}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
