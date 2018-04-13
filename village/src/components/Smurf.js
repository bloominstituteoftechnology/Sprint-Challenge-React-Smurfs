import React from "react";
import { Link } from "react-router-dom";

// Work in Progress: Link does not link to a single smurf yet..
class Smurf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			height: "",
			age: ""
		};
	}
	// console.log("props", props);
	render() {
		return (
			<div className="Smurf">
				<Link to={`/smurfs/${this.props.id}`}>
					<h3>{this.props.name}</h3>
				</Link>
				<strong>{this.props.height} tall</strong>
				<p>{this.props.age} smurf years old</p>
			</div>
		);
	}
}

export default Smurf;
