import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const CHANGE_SMURF = "CHANGE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

const serverURL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${serverURL}`);

  return {
    type: GET_SMURFS,
    payload: smurfs
  }
}

export const addSmurf = (smurf) => {
  const addSmurf = axios.post(`${serverURL}`, smurf);

  return {
    type: ADD_SMURF,
    payload: addSmurf
  }
}

export const changeSmurf = (smurf) => {
  const changeSmurf = axios.put(`${serverURL}`, smurf);

  return {
    type: CHANGE_SMURF,
    payload: changeSmurf
  }
}

export const deleteSmurf = (id) => {
  const deleteSmurf = axios.delete(`${serverURL}`, {index: id});

  return {
    type: DELETE_SMURF,
    payload: deleteSmurf
  }
}