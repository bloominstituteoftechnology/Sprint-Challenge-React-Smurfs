import { GET_SMURFS, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF } from '../actions';

export default (smurfs = [], action) => {
  switch (action.type) {
    case GET_SMURFS: // array
    case ADD_SMURF: // array
      return action.payload.data;
    case UPDATE_SMURF: // smurf
      console.log('reducer updated smurf', action.payload.data)
      const newSmurfs = smurfs.slice(0)
      const found = newSmurfs.filter(smurf => {
        return smurf.id === action.payload.data.id;
      });
      //const [id,name,age,height] = action.payload.data
      //found.id = action.payload.data.id
      found.name = action.payload.data.name
      found.age = action.payload.data.age
      found.height = action.payload.data.height
      return newSmurfs

    case DELETE_SMURF: // object { SmurfRemoved: foundSMurf }
      console.log('reducer deleted action', action)
      return smurfs.slice(0).filter(smurf => {
        return smurf.id !== action.payload.data.SmurfRemoved.id;
      });
    default:
      return smurfs;
  }
};
