import {
  GET_SMURFS,
  ADD_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  console.log('Inside smurfsReducers.js');
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    default:
      return smurfs;
  }
}