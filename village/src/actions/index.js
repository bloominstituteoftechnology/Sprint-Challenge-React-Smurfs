import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
    console.log('Retrieving getSmurfs()');
    const smurfsEndpoint = 'http://localhost:3333/smurfs';
    const smurfRequest = axios.get(smurfsEndpoint);

    return {
        type: GET_SMURFS,
        payload: smurfRequest,
    };
}

export const addSmurf = (smurf) => { 
    console.log('Adding Smurfs');
    const addSmurfEndpoint = "http://localhost:3333/smurfs";
    const addSmurfRequest = axios.post(addSmurfEndpoint, smurf);

    return {
        type: ADD_SMURF,
        payload: addSmurfRequest,
    };
}