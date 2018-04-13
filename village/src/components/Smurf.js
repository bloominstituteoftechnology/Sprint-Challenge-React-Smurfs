import React from "react";
import { Link } from "react-router-dom";

// Work in Progress: Link does not link to a single smurf yet..
const Smurf = props => {
	// console.log("props", props);
	return (
		<div className="Smurf">
			<Link to={`/smurfs/${props.id}`}>
				<h3>{props.name}</h3>
			</Link>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
		</div>
	);
};

export default Smurf;
