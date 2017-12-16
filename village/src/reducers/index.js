import { combineReducers } from 'redux';
import smurfs from './smurfsReducer';
import {GET_SMURFS,ADD_SMURF,DELETE_SMURF,UPDATE_SMURF} from '../actions/index'
import { access } from 'fs';


const smurfReducer = (smurfs=[],action) => {
  switch(action.type){
    case GET_SMURFS:
      return action.payload.data;

    case ADD_SMURF:
      return action.payload.data;
    
    case UPDATE_SMURF:
      const updated_smurf = action.payload.data;
      const updated_id = updated_smurf.id;
      // console.log(smurfs,updated_id)
      const newArr = smurfs.map(smurf => {
        if(smurf.id === updated_id){
          smurf = updated_smurf;
        }
        return smurf;
      })
      // console.log(newArr)
      return newArr;  



    // case DELETE_SMURF:
    //   const removed = action.payload.data.SmurfRemoved;
    //   console.log(removed);
    //   return (smurfs.filter(smurf => smurf.id  !== removed.id))
    default:
      return smurfs;
  }
}


const rootReducer = combineReducers({
  smurfs:smurfReducer
});

export default rootReducer;