import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

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
  return {
    fetchSmurfs: () => dispatch(getSmurfs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);