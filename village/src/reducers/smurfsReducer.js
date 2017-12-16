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
      return smurfs.map(smurf => {
        if (smurf.id === action.payload.data.id) return action.payload.data;
        return smurf;
      });
    case DELETE_SMURF:
    return smurfs.filter((smurf) => {
      return (smurf.id !== action.payload.data.SmurfRemoved.id);
      });
    default:
      return smurfs;
  }
}