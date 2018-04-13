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
	updateSmurf = id => {};

	render() {
		console.log(this.props.id);
		return (
			<div className="Smurf">
				<Link to={`/smurfs/${this.props.id}`}>
					<h3>{this.props.name}</h3>
				</Link>
				<strong>{this.props.height} tall</strong>
				<p>{this.props.age} smurf years old</p>
				<form>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleNewInput}
						placeholder="Name"
					/>
					<input
						type="text"
						name="height"
						value={this.state.height}
						onChange={this.handleNewInput}
						placeholder="Height"
					/>
					<input
						type="text"
						name="age"
						value={this.state.age}
						onChange={this.handleNewInput}
						placeholder="Age"
					/>
					<button onClick={() => this.deleteSmurf(this.props.id)}>
						Delete
					</button>
					<button onClick={() => this.updateSmurf(this.props.id)}>
						Update
					</button>
				</form>
			</div>
		);
	}
}

export default Smurf;
