import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  const smurfsPromise = axios.get("localhost:3333/smurfs");
  return {
    type: GET_SMURFS,
    payload: smurfsPromise 
  }
}

export const addSmurf = (smurf) => {
  console.log (`this is my addsmurf test data - ${smurf.name}`)
  const smurfsPromise = axios.post("localhost:3333/smurfs", smurf);
  return {
    type: ADD_SMURF,
    payload: smurfsPromise 
  }
}