import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';

import Smurfs from './Smurfs';

class SmurfsContainer extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <Smurfs smurfs={this.props.smurfs} remove={this.props.deleteSmurf}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSmurfs: () => dispatch(getSmurfs()),
    deleteSmurf: (id) => dispatch(deleteSmurf(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfsContainer);