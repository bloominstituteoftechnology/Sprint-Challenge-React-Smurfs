import { GET_SMURFS, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF } from '../actions';

export default (smurfs = [], action) => {
  switch (action.type) {
    case ADD_SMURF:
      // const newSmurf = smurfs.push(action.payload.data);
      return action.payload.data;
    case GET_SMURFS:
      return action.payload.data;
    case UPDATE_SMURF:
      return action.payload.data;
    case DELETE_SMURF:
      return action.payload.data;
    default:
      return smurfs;
  }
};
