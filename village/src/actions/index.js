import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => {
	const smurfs = axios.get('http://localhost:3333/smurfs');
	return {
		type: GET_SMURFS,
		payload: smurfs,
	};
}

export const addSmurf = (smurf) => {
	const smurfs = axios.post('http://localhost:3333/smurfs', smurf);
	return {
		type: ADD_SMURF,
		payload: smurfs,
	};
}

export const updateSmurf = (smurf) => {
	const smurfs = axios.put('http://localhost:3333/smurfs', smurf);
	return {
		type: UPDATE_SMURF,
		payload: smurfs,
	};
}

export const deleteSmurf = (smurf) => {
	const smurfs = axios.delete('http://localhost:3333/smurfs', {id: smurf});
	return {
		type: DELETE_SMURF,
		payload: smurfs,
	};
}