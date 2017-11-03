import React from 'react';
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';

const SmurfsContainer = () => {
  return (
    <Smurfs />
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps,  { getSmurfs, addSmurf, updateSmurf, deleteSmurf })(Smurfs);