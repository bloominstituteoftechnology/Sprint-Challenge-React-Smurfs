import {
  GET_SMURFS,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  let copy = [];
  switch(action.type) {
    case GET_SMURFS:
    case ADD_SMURF:
      return action.payload.data;
    case UPDATE_SMURF:
      copy = smurfs.slice(0);
      copy.splice(action.payload.data.id, 1, action.payload.data);
      return copy;
    case DELETE_SMURF:
      copy = smurfs.slice(0);
      copy.splice(action.payload.data.SmurfRemoved.id, 1);
      return copy;
    default:
      return smurfs;
  }
}