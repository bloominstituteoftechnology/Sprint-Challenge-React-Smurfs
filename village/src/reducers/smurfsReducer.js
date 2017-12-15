import {
  GET_SMURFS,
  ADD_SMURF,
  UPDATE_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch(action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      const smurfsData = smurfs.concat(action.payload);
      return smurfsData;
    case UPDATE_SMURF:
      return action.payload.data;
    default:
      return smurfs;
  }
}