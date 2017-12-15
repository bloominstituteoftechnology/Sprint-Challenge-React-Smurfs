import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const URL = 'http://localhost:3333/smurfs';

export const addSmurf = (smurf) => {
    const data = axios.post(URL, smurf);
    return {
        type: ADD_SMURF,
        payload: data
    }
}

export const getSmurfs = () => {
    const data = axios.get(URL);
    return {
        type: GET_SMURFS,
        payload: data
    }
}

export const updateSmurf = (smurf) => {
    return {
        type: UPDATE_SMURF
    }
}

export const deleteSmurf = (smurf) => {
    return {
        type: DELETE_SMURF
    }
}