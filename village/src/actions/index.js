import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
    // GET since getting/reading smurf data
    const promise = axios.get('http://localhost:3333/smurfs');
    return {
        type: GET_SMURFS,
        payload: promise
    }
}

export const addSmurf = (smurf) => {
    // Should be POST since we are adding/creating new smurf
    axios.post('http://localhost:3333/smurfs');
    return {
        type: ADD_SMURF,
        payload: smurf
    }
}
