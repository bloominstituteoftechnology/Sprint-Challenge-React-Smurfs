import React, { Component } from 'react';

import Smurf from './Smurf';

import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';

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
    console.log(this.state)
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.props.smurfs.map((smurf, i) => {
            return (
              <div>
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={i} />
                <button onClick={() => { this.props.deleteSmurf(i) }}>Gargamel!</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default Smurfs;