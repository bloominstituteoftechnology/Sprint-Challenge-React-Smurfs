import React from 'react';

import './Smurf.css';

const Smurf = props => {
	console.log(props);
	return (
		<div>
			{props.name ? (
				<div className="Smurf">
					<h3>{props.name}</h3>
					<strong>{props.height} tall</strong>
					<p>{props.age} old</p>
				</div>
			) : (
				<div className="Smurf">
					<h3>{props.match.params.name}</h3>
					<strong>{props.match.params.height} tall</strong>
					<p>{props.match.params.age} old</p>
				</div>
			)}
		</div>
	);
};

export default Smurf;
