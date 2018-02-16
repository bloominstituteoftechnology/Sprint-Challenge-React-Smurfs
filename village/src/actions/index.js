import axios from "axios";
import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";

export const getSmurfs = () => {
  const apiUrl = "http://localhost:3333/smurfs";
  const smurfrequest = axios.get(apiUrl);
  return {
    type: GET_SMURFS,
    payload: smurfrequest
  };
};

export const addSmurf = smurf => {
  const apiUrl = "http://localhost:3333/smurfs";
  const addsmurfrequest = axios.post(apiUrl, smurf);
  return {
    type: ADD_SMURF,
    payload: addsmurfrequest
  };
};

export const deleteSmurf = smurf => {
  const apiUrl = "localhost:3333/smurfs";
  const updatesmurfrequest = axios.put(apiUrl, smurf);
  return {
    type: UPDATE_SMURF,
    payload: updatesmurfrequest
  };
};
