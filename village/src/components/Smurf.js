import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Smurf extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			height: "",
			age: ""
		};
	}
	// Event Handlers
	handleNewInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	// Delete request
	deleteSmurf = id => {
		axios
			.delete(`http://localhost:3333/smurfs/${id}`)
			.then(response => this.props.fetchSmurfs())
			.catch(error => console.error(error));
	};
	// Put Request
	updateSmurf = id => {
		const smurf = {};
		if (this.state.height !== "") {
			smurf.height = this.state.height;
		}
		if (this.state.age !== "") {
			smurf.age = this.state.age;
		}
		console.log("update", smurf);
		axios
			.put(`http://localhost:3333/smurfs/${id}`, smurf)
			.then(response => this.props.fetchSmurfs())
			.catch(error => console.error(error));
		this.setState({ height: "", age: "" });
	};

	render() {
		// console.log(this.props.id);
		return (
			<Smurf
				name={this.state.smurf.name}
				id={this.state.smurf.id}
				age={this.state.smurf.age}
				height={this.state.smurf.height}
				key={this.state.smurf.id}
			/>
		);
	}
}

export default Smurf;
