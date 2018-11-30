import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props){
    super(props);
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id === undefined){
      this.setState({smurfs: this.props.smurfs});
    }
    else {
      let smurf = this.props.smurfs.find(smurf => {
        return smurf.id === this.props.match.params.id;
      })
      this.setState({smurfs: [smurf]});
    }
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                {...this.props}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                stageUpdate={this.props.stageUpdate}
                stageSelection={this.props.stageSelection}
                smurf={smurf}
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
