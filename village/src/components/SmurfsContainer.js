import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import Smurfs from './Smurfs';

const SmurfsContainer = (props) => {
  return (
    <Smurfs />
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);