import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';
import { GET_SMURFS, ADD_SMURF } from '../actions';

const smurfsReducer = (smurfs = [], action) => {
  switch(action.type) {
    case GET_SMURFS:
    case ADD_SMURF:
      return action.payload.data;
    default:
      return smurfs;
  }
};

const rootReducer = combineReducers({
  smurfs: smurfsReducer,
});

export default rootReducer;