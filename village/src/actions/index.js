import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

const endpoint = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(endpoint);
  return {
    type: GET_SMURFS,
    payload: smurfs,
  }
}

export const addSmurf = (smurf) => {
  const retValue = axios.post(endpoint, smurf)
    .catch(value => {
      console.log(value.request.status);
      return axios.put(endpoint, smurf);
    });
    console.log(retValue);
  return {
    type: ADD_SMURF,
    payload: retValue,
  }
}

export const deleteSmurf = (id) => {
  return axios.delete(endpoint, { data: { id }})
    .then(getSmurfs);
}
/*
{"config":{
  "transformRequest":{},
  "transformResponse":{},
  "timeout":0,
  "xsrfCookieName":"XSRF-TOKEN",
  "xsrfHeaderName":"X-XSRF-TOKEN",
  "maxContentLength":-1,
  "headers":{"Accept":"application/json, text/plain, ","Content-Type":"application/json;charset=utf-8"},
  "method":"post",
  "url":"http://localhost:3333/smurfs",
  "data":"{\"name\":\"test\",\"age\":\"j\",\"height\":\"j\"}"
},
  "request":{},
  "response":{
    "data":{"Error":"Ya gone did smurfed! test already exists in the smurf DB."},
    "status":422,
    "statusText":"Unprocessable Entity",
    "headers":{"content-type":"application/json; charset=utf-8"},
    "config":{
      "transformRequest":{},
      "transformResponse":{},
      "timeout":0,
      "xsrfCookieName":"XSRF-TOKEN",
      "xsrfHeaderName":"X-XSRF-TOKEN",
      "maxContentLength":-1,
      "headers":{"Accept":"application/json, text/plain, ","Content-Type":"application/json;charset=utf-8"},
      "method":"post",
      "url":"http://localhost:3333/smurfs",
      "data":"{\"name\":\"test\",\"age\":\"j\",\"height\":\"j\"}"
    },
    "request":{},
  }
}*/
