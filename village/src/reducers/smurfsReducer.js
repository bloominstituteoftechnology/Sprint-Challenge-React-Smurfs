import {
  GET_SMURFS,
  ADD_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      console.log("payload", action.payload.data);
      return action.payload.data;
    case ADD_SMURF:
      smurfs.push(action.payload);
      return smurfs;
    default:
      return smurfs;
  }
}