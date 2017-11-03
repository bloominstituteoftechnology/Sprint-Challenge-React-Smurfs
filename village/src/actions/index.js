import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";



export const getSmurfs = () => {
    const getSmurfEndpoint = 'http://localhost:3333/smurfs';
    const getSmurfs = axios.post(getSmurfEndpoint)
    return {
        type: GET_SMURFS,
        payload: getSmurfs
    }
}

export const addSmurf = (smurf) => {
    const addSmurfEndpoint = 'http://localhost:3333/smurfs';
    const addSmurfs = axios.post(addSmurfEndpoint, smurf)
    return {
        type: ADD_SMURF,
        payload: addSmurfs,
    }
}