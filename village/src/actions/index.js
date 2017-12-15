import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const MODIFY_SMURF = 'MODIFY_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

const api = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const getSmurfs = axios.get(api);
  return {
    type: GET_SMURFS,
    payload: getSmurfs
  }
};

export const addSmurf = (smurf) => {
  const postSmurf = axios.post(api, smurf);
  return {
    type: ADD_SMURF,
    payload: postSmurf
  }
};

export const modifySmurf = (smurf) => {
  const putSmurf = axios.put(api, smurf);
  return {
    type: MODIFY_SMURF,
    payload: putSmurf
  }
};

export const deleteSmurf = (id) => {
  const deleteSmurf = axios.delete(api, {data: {id}});
  return {
    type: DELETE_SMURF,
    payload: deleteSmurf
  }
}