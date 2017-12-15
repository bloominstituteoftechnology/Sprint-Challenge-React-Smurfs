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
    this.setState({
      smurfs
    })
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { (this.props.smurfs).map((smurf, i) => {
            return <Smurf id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;