import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

const endpoint = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfsRequest = axios.get(endpoint);

  console.log('getSmurfs Action Creator.request', smurfsRequest);

  return {
    type: GET_SMURFS,
    payload: smurfsRequest
  };
};

export const addSmurf = smurf => {
  const addSmurfsRequest = axios.post(endpoint, smurf);
  console.log(addSmurfsRequest);

  return {
    type: ADD_SMURF,
    payload: addSmurfsRequest
  };
};

export const deleteSmurf = id => {
  const deleteSmurfsRequest = axios.delete(endpoint, { data: { id } });

  return {
    type: DELETE_SMURF,
    payload: deleteSmurfsRequest
  }.then(getSmurfs);
};
