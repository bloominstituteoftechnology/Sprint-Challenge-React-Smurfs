import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";

export const getSmurfs = () => {
    const apiUrl = 'http://localhost:3333/smurfs'
    const smurfrequest = axios.get(apiUrl)
    // console.log(smurfrequest);
    return {
        type:GET_SMURFS,
        payload:smurfrequest
    }
}

export const addSmurf = (smurf) => {
    // console.log(smurf)
    const apiUrl = 'http://localhost:3333/smurfs'
    const addsmurfrequest = axios.post(apiUrl,smurf)
    // console.log(addsmurfrequest);
    return {
        type:ADD_SMURF,
        payload:addsmurfrequest
    }
}

export const deleteSmurf = (id) => {
    // console.log('im triggered')
    // console.log(id);
    const apiUrl = 'http://localhost:3333/smurfs'
    const deletesmurfrequest = axios.delete(apiUrl,
        {
            data:{
                id:id
            }
        }
    )
    // console.log(deletesmurfrequest);
    return {
        type:DELETE_SMURF,
        payload:deletesmurfrequest
    }
}

export const updateSmurf = (smurf) => {
    // console.log('im triggered')
    // console.log(smurf)
    const apiUrl = 'http://localhost:3333/smurfs'
    const updatesmurfrequest = axios.put(apiUrl,smurf)
    console.log(updatesmurfrequest);
    return {
        type:UPDATE_SMURF,
        payload:updatesmurfrequest
    }
}