import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';

const rootReducer = combineReducers({
  smurfs
});

export default rootReducer;