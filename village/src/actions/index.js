import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = 'UPDATE_SMURF';

export const getSmurfs = () => {
    const apiUrl = 'http://localhost:3333/smurfs';
    const smurfRequest = axios.get(apiUrl);

    return {
        type: GET_SMURFS,
        payload: smurfRequest
    }
}

export const addSmurf = (smurf) => {
    const update = axios.post('http://localhost:3333/smurfs', smurf);

    return {
        type: ADD_SMURF,
        payload: update
    }
}

export const addUpdatedSmurf = (smurf) => {
    const update = axios.put('http://localhost:3333/smurfs', smurf)

    return {
        type: UPDATE_SMURF,
        payload: update
    }
}