import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

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

export const updateSmurf = (index, update) => {
  return axios.put(endpoint, { index, update, })
    .then(getSmurfs);
}

export const deleteSmurf = (index) => {
  return axios.delete(endpoint, { data: { index }})
    .then(getSmurfs);
}