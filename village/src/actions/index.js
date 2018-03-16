import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => {
    const obj = axios.get('http://localhost:3333/smurfs');
    return {
        type: GET_SMURFS,
        payload: obj
    };
};

export const addSmurf = (smurf) => {
    const obj = axios.post('http://localhost:3333/smurfs', smurf);
    return {
        type: ADD_SMURF,
        payload: obj
    };
};

export const updateSmurf = (smurf) => {
    const obj = axios.put('http://localhost:3333/smurfs', smurf);
    return {
        type: UPDATE_SMURF,
        payload: obj
    };
};

export const deleteSmurf = (index) => {
    const obj = axios.delete('http://localhost:3333/smurfs', {
        date: {
            index
        }
    });
    return {
        type: DELETE_SMURF,
        payload: obj
    };
};