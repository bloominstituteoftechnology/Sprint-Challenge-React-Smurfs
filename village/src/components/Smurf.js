import React from 'react';

const Smurf = props => {
	// console.log(props);
	// debugger;
	return (
		<div className="smurf-card">
			<h3>{props.name}</h3>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
			<button onClick={() => props.deleteSmurf(props.id)} className="small danger">
				Delete
			</button>
		</div>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};

export default Smurf;
