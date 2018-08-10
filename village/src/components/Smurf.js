import React from "react";

class Smurf extends React.Component {
	state = {
		showForm: false
	};

	render() {
		return (
			<div className="Smurf">
				<h3>{this.props.name}</h3>
				<strong>{this.props.height} tall</strong>
				<p>{this.props.age} smurf years old</p>
				<button onClick={this.props.onKillSmurf}>Murder Smurf</button>
			</div>
		);
	}
}

Smurf.defaultProps = {
	name: "",
	height: "",
	age: ""
};

export default Smurf;
