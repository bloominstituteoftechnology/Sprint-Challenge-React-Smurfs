import {
  GET_SMURFS,
  ADD_SMURF,
  PUT_SMURF
} from '../actions';


const smurfsReducer = (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      return action.payload.data;
    case PUT_SMURF:
      return action.payload.data;  
    default:
      return smurfs;
  }
};
export default smurfsReducer;