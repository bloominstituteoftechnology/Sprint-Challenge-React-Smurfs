import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  MODIFY_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch(action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      return action.payload.data;
    case DELETE_SMURF:
      const smurfRemoved = action.payload.data.SmurfRemoved;
      return smurfs.filter((smurf) => smurf.id !== smurfRemoved.id);
    case MODIFY_SMURF:
      return smurfs.map((smurf) => {
        if (smurf.id === action.payload.data.id) return action.payload.data;
        return smurf;
      })
    default:
      return smurfs;
  };
};