import { GET_SMURFS, ADD_SMURF, DELETE_SMURF, UPDATE_SMURF } from "../actions";

export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
    case ADD_SMURF:
      if (action.payload.status === 200) {
        return action.payload.data;
      }
      return smurfs;
    case UPDATE_SMURF: ;
    if(action.payload.status === 200) {
      const updatedSmurf = action.payload.data;
      return smurfs.map(smurf => smurf.id === updatedSmurf.id ? updatedSmurf : smurf);
    }
    return smurfs;
    case DELETE_SMURF:
      if (action.payload.status === 200 && action.payload.data.SmurfRemoved) {
        const removed = action.payload.data.SmurfRemoved;
        return smurfs.filter(smurf => smurf.id !== removed.id);
      }
      return smurfs;
    default:
      return smurfs;
  }
};
