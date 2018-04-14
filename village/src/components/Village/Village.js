import React, { Component } from 'react';
import Smurf from '../Smurf';
import SmurfForm from '../SmurfForm';

class VillageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="https://vignette.wikia.nocookie.net/roblox/images/7/72/Smurfs_The_Lost_Village_Logo.png/revision/latest?cb=20180123225720" className="SmurfTitle"/>
        <SmurfForm getSmurfs={this.props.getSmurfs} />
        {this.props.smurfs.map(smurf => <Smurf {...{smurf: smurf, getSmurfs: this.props.getSmurfs}} key={smurf.id} />)}
      </div>
    )
  }
}

export default VillageHome;