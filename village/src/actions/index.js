import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  const smurfEndpoint = axios.get('http://localhost:3333/smurfs');
    return {
      type: GET_SMURFS,
      payload: smurfEndpoint
    };
};

export const addSmurf = (smurf) => {
  const smurfEndpoint = axios.post('http://localhost:3333/smurfs', smurf);
    return {
      type: ADD_SMURF,
      payload: smurfEndpoint
    };  
};