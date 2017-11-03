import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
    const smurfsEndPoint = `http://localhost:3333/smurfs`;
    const smurfs = axios.get(smurfsEndPoint);
    return{
        type: GET_SMURFS,
        payload: smurfs
    }
}

export const addSmurf = (smurf) => {
    const smurfsEndPoint = `http://localhost:3333/smurfs`;
    const postSmurfs = axios.post(smurfsEndPoint, )
    return{
        type: ADD_SMURF,
        postSmurfs
    }
}