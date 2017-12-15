import {
  GET_SMURFS,
  ADD_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch(action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
    let newSmurfs = smurfs.slice(0);
    newSmurfs = action.payload.data
      return newSmurfs;
    default:
      return smurfs;
  }
}