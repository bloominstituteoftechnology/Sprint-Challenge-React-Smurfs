import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

const URL = 'http://localhost:3333/smurfs';
export const getSmurfs = () => {
  const promise = axios.get(URL);
  return {
    type: GET_SMURFS,
    payload: promise
  };
}

export const addSmurf = (smurf) => {
  const promise = axios.post(URL, smurf);
  return {
    type: ADD_SMURF,
    payload: promise
  };
}

export const updateSmurf = (smurf) => {
  axios.put(URL, smurf);
  const promise = axios.get(URL);
  return {
    type: UPDATE_SMURF,
    payload: promise
  };
}

export const deleteSmurf = (id) => {
  const promise = axios.delete(URL, { data: { id }});
  return {
    type: DELETE_SMURF,
    payload: promise
  };
}

