import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSmurfs, addSmurf } from '../actions';

import Smurfs from './Smurfs';

const SmurfsContainer = () => {
  return (
    <Smurfs />
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSmurfs: getSmurfs,
    addSmurf
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);