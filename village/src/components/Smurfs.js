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
    console.log(smurfs)
    this.setState({
      smurfs
    })
  }

  deleteSmurf = (e) => {
    this.props.deleteSmurf(e.target.dataset.index);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf, i) => {
            return <Smurf 
                    name={smurf.name} 
                    age={smurf.age} 
                    height={smurf.height} 
                    key={i}
                    index={i}
                    deleteSmurf={this.deleteSmurf} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;