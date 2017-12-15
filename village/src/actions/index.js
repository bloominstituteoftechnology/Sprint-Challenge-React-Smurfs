import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

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