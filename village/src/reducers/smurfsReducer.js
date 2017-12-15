import { GET_SMURFS, ADD_SMURF } from "../actions";

export default (smurfs = [], action) => {
  console.log("payload", action.payload);
  switch (action.type) {
    case GET_SMURFS:
      return action.payload.data;
    case ADD_SMURF:
      const newSmurfs = smurfs.slice(0);
      newSmurfs.push(action.payload);
      return newSmurfs;
    default:
      return smurfs;
  }
};
