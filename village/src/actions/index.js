import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const baseURL = 'http://localhost:3333';

export const getSmurfs = () => {
    const payload = axios.get(`${baseURL}/smurfs`);
    return {
        type: GET_SMURFS,
        payload

    }
}

export const addSmurf = (smurf) => {
    const payload = axios.post(`${baseURL}/smurfs`, smurf);
    return {
        type: ADD_SMURF,
        payload
    }
}