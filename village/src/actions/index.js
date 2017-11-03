import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

const endpoint = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(endpoint);

  return {
    type: GET_SMURFS,
    payload: smurfs,
  }
}

export const addSmurf = (smurf) => {
  return axios.post(endpoint, smurf)
    .then(getSmurfs);
}