import {
  GET_SMURFS,
  ADD_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      const allSmurfs = smurfs.concat(action.payload);
      return allSmurfs;
    default:
      return smurfs;
  }
}