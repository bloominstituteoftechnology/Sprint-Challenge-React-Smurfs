import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF
} from '../actions';


export default (smurfs = [], action) => {
	switch(action.type) {
		case GET_SMURFS:
			return action.payload.data;
		case ADD_SMURF:
		    return smurfs.concat(action.payload);
		case DELETE_SMURF:
		    return smurfs.splice(action.payload, 1);
		default:
			return smurfs;
	}
}