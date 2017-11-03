import { GET_SMURFS, ADD_SMURF } from '../actions';

export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      console.log('on Reducer', action.payload);
      return action.payload.data;
    // case DELETE_SMURF:
    //   return action.payload.data(smirf => smirf.key !== action.payload.key);
    // return smurfs.filter(({ id }) => id !== action.payload.data);
    default:
      return smurfs;
  }
};
