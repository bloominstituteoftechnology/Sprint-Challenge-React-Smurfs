import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
    console.log('Retrieving getSmurfs()');
    const smurfsEndpoint = 'http://localhost:5000/smurfs';
    const smurfRequest = axios.get(smurfsEndpoint);

    return {
        type: GET_SMURFS,
        payload: smurfRequest,
    };
}

export const addSmurf = (smurf) => { 
    console.log(`adding Smurfs ${smurf}`)
    const addSmurfEndpoint = "http://localhost:5000/new-smurf";
    const addSmurfRequest = axios.get(addSmurfEndpoint, smurf);

    return {
        type: ADD_SMURF,
        payload: addSmurfRequest,
    };
}