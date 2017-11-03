import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

const url = 'http://localhost:3333';

export const getSmurfs = () => {
  const endpoint = url + '/smurfs';
  const smurfs = axios.get(endpoint);

  return {
    type: GET_SMURFS,
    payload: smurfs,
  }
}

export const addSmurf = (smurf) => {
  const endpoint = url + '/smurfs';
  return axios.post(endpoint, smurf)
    .then(getSmurfs);
}