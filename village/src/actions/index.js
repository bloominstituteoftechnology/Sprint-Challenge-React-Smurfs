import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => {
  const smurfPromise = axios.get('http://localhost:3333/smurfs');
  return {
    type: GET_SMURFS,
    payload: smurfPromise
  };
};

export const addSmurf = smurf => {
  const smurfPromise = axios.post('http://localhost:3333/smurfs', smurf);
  return {
    type: ADD_SMURF,
    payload: smurfPromise
  };
};

export const deleteSmurf = smurf => {
  console.log(smurf);
  const smurfPromise = axios.delete('http://localhost:3333/smurfs', smurf);
  console.log(smurfPromise);
  return {
    type: DELETE_SMURF,
    payload: smurfPromise
  };
};
