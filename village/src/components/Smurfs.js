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
    const smurfs = this.props.fetchSmurfs();
    console.log(smurfs)
    this.setState({
      smurfs
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf, i) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;