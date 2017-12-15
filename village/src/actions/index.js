import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  const request = axios.get('http://lochalhost:3333/smurfs');
  const postRequest
  return {
    type : GET_SMURFS,
    payload : request
  };

}

export const addSmurf = (smurf) => {

}
