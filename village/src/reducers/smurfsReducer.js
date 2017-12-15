import {
  GET_SMURFS,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch(action.type) {

    case GET_SMURFS:
      return action.payload.data;

    case ADD_SMURF:
      return action.payload.data;

    case UPDATE_SMURF:
      return action.payload.data;

    case DELETE_SMURF:
console.log(action.payload);      
      return smurfs.filter((smurf) => {
        return (smurf.id !== action.payload.data.SmurfRemoved.id);
      });
      // return action.payload.data;

    default:
      return smurfs;

  }
}