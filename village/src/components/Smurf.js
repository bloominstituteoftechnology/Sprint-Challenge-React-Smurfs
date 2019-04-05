import React from "react";

const Smurf = props => {
	const banishSmurf = e => {
		e.preventDefault();
		props.deleteSmurf(props.id);
	};
	return (
		<div className='Smurf'>
			<h3>{props.name}</h3>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
			<button onClick={banishSmurf}>Banish Smurf from Village</button>
		</div>
	);
};

Smurf.defaultProps = {
	name: "",
	height: "",
	age: ""
};

export default Smurf;
