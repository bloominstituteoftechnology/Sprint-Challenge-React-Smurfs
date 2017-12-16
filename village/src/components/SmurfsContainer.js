import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf,updateSmurf } from '../actions';

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

const mapDispatchToProps = (dispatch) => {
  return  {
    fetchSmurfs: () => dispatch(getSmurfs()),
    deleteSmurf: (i) => dispatch(deleteSmurf(i)),
    updateSmurf: (i) => dispatch(updateSmurf(i))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);