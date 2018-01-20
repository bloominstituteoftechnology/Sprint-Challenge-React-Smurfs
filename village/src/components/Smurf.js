import React from 'react';
import { NavLink } from 'react-router-dom';

import './Smurf.css';

const Smurf = props => {
	// console.log(props);

	let smurf;
	props.name ? (smurf = props) : (smurf = props.match.params);

	// console.log(props);
	return (
		<div>
			<div className="Smurf">
				<h3>{smurf.name}</h3>
				<strong>{smurf.height} tall</strong>
				<p>{smurf.age} old</p>
			</div>
			{props.location ? (
				<NavLink to="/" className="SmurfToVillage">
					<button>go back to village</button>
				</NavLink>
			) : null}
		</div>
	);
};

export default Smurf;
