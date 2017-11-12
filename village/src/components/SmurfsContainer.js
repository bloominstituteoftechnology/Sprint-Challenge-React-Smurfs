//import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf, } from '../actions';
import Smurfs from './Smurfs';

/*const SmurfsContainer = () => {
  return (
    <Smurfs />
  );
}*/

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, })(Smurfs);