import { GET_SMURFS } from '../actions';


export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    default:
      return smurfs;
  }
}