import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const PUT_SMURF = "PUT_SMURF";
export const DEL_SMURF = "DEL_SMURF";

const serverUrl = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
    const smurfs = axios.get(serverUrl);
    return {
        type: GET_SMURFS,
        payload: smurfs
    };
};

export const addSmurf = (smurf) => {
    const newSmurfs = axios.post(serverUrl, smurf);
    return {
        type: ADD_SMURF,
        payload: newSmurfs
    };
};

export const putSmurf = (smurf) => {
    const smurfs = axios.get(serverUrl);
    const smurfPut = axios.put(serverUrl, smurf);
    return {
        type: PUT_SMURF,
        payload: smurfs
    };
};

export const delSmurf = (smurfId) => {
    const smurfs = axios.get(serverUrl);
    const smurfDel = axios.delete(serverUrl, { data: smurfId });
    return {
        type: DEL_SMURF,
        payload: smurfs
    };
};