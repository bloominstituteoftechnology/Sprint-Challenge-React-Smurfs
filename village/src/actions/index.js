import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";


export const getSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs");
  return {
    type: GET_SMURFS,
    payload: promise
  }
}

export const addSmurf = (smurf) => {
  const promise = axios.post("http://localhost:3333/smurfs", smurf);
  return {
    type: ADD_SMURF,
    payload: promise
  }
}

export const updateSmurf = (smurf) => {
  const promise = axios.put("http://localhost:3333/smurfs", smurf);
  return {
    type: UPDATE_SMURF,
    payload: promise
  }
}

export const deleteSmurf = (smurf) => {
  const promise = axios.delete("http://localhost:3333/smurfs", { data: smurf });
  return {
    type: DELETE_SMURF,
    payload: promise
  }
}