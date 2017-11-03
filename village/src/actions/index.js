import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";


export const getSmurfs = () => {
  const smurfsEndpoint = "http://localhost:3333/smurfs";
  const smurfs = axios.get(smurfsEndpoint);
  return {
    type: GET_SMURFS,
    payload: smurfs,
  }
}

export const addSmurf = (smurf) => {
  const addSmurfEndpoint = "http://localhost:3333/smurfs";
  const addSmurfRequest = axios.post(addSmurfEndpoint, smurf);

  // console.log(addSmurfRequest);

  return {
    type: ADD_SMURF,
    payload: addSmurfRequest,
  };
};

