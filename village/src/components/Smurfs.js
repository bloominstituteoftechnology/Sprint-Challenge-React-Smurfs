import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    const smurfs = this.props.getSmurfs();

    this.setState({
      smurfs,
    });
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf, i) => {
            return <Smurf deletesmurf={ this.props.deleteSmurf } name={smurf.name} age={smurf.age} height={smurf.height} key={i} id={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;