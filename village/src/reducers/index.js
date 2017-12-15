import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';
import {GET_SMURFS,ADD_SMURF,DELETE_SMURF} from '../actions/index'


const smurfReducer = (smurfs=[],action) => {
  switch(action.type){
    case GET_SMURFS:
      return action.payload.data;

    case ADD_SMURF:
      return action.payload.data;
    
    // case UPDATE_SMURF:
    //   return action.payload.data;

    case DELETE_SMURF:
      return action.payload.data.smurfs;

    default:
      return smurfs;
  }
}


const rootReducer = combineReducers({
  smurfs:smurfReducer
});

export default rootReducer;