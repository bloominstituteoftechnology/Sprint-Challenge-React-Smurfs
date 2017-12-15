import {
  GET_SMURFS,
  ADD_SMURF,
  PUT_SMURF,
  DEL_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      return action.payload.data;
    case PUT_SMURF:
      return action.payload.data;
    case DEL_SMURF:
      return action.payload.data;
    default:
      return smurfs;
  }
}