import {
  GET_SMURFS,
  ADD_SMURF
} from '../actions';


export default (smurfs = [], action) => {
  switch(action.type) {
    case GET_SMURFS:
    case ADD_SMURF:
      console.log(action.payload.data);
      return action.payload.data;
    default: 
      return smurfs;
  }
}