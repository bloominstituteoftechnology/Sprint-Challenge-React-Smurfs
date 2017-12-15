import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => {
    const promise = axios.get('http://http://localhost:3333/smurfs');

    return {
        type: GET_SMURFS,
        payload: promise,
    };

}

export const addSmurf = (smurf) => {
    const promise = axios.post('http://localhost:3333/smurfs', smurf);

    return {
        type: ADD_SMURF,
        payload: promise,
    };

}

export const deleteSmurf = ({ id }) => {
    const promise = axios.delete('http://localhost:3333/smurfs', {
        data: {
            index: [id]
        }
    });
    return{
        type: DELETE_SMURF,
        payload: promise,
    };
}