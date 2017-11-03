import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';

const rootReducer = combineReducers({
  smurfs: smurfs
});

export default rootReducer;