import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
const apiUrl = "http://localhost:3333/smurfs";

export const getSmurfs = () => {
  let payload = {};
  const smurfRequest = axios.get(apiUrl);

  return {
    type: "GET_SMURFS",
    payload: smurfRequest
  };
};

export const addSmurf = smurf => {
  let payload = {};
  const addASmurf = axios.post(apiUrl, smurf);
  return {
    type: "ADD_SMURF",
    payload: addASmurf
  };
};
