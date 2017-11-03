import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
    const smurfHouse = 'http://localhost:3333/smurfs';
    const smurfGrab = axios.get(smurfHouse)
    return {
      type: GET_SMURFS,
      payload: smurfGrab
    };
};

export const addSmurf = (smurf) => {
    const smurfHouse = 'http://localhost:3333/smurfs';
    const smurfMake =  axios.post(smurfHouse, smurf)
    return {
      type: ADD_SMURF,
      payload: smurfMake
    };
};