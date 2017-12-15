import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  const apiURL = "http://localhost:3333/smurfs";
  const smurfRequest = axios.get(apiURL);

  return {
    type: GET_SMURFS,
    payload: smurfRequest
  };
};

export const addSmurf = smurf => {
  const promise = axios.post("http://localhost:3333/smurfs", smurf);
  return {
    type: ADD_SMURF,
    payload: promise
  };
};
