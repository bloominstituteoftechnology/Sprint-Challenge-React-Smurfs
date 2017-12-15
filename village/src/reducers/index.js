import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';
import smurfsReducer from './smurfsReducer';

const rootReducer = combineReducers({
  smurfs, 
  smurfsReducer
});

export default rootReducer;