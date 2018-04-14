import React from "react";
import axios from "axios";
import Smurf from "./Smurf";

class SmurfCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			smurf: 0
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
		return (
			<div className="Smurf">
				<Link to={`/smurfs/${this.props.id}`}>
					<h3>{this.props.name}</h3>
				</Link>
				<strong>{this.props.height} cm tall</strong>
				<p>{this.props.age} smurf years old</p>
				<form>
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
					<button type="submit" onClick={() => this.deleteSmurf(this.props.id)}>
						Delete
					</button>
					<button type="submit" onClick={() => this.updateSmurf(this.props.id)}>
						Update
					</button>
				</form>
			</div>
		);
	}
}

export default SmurfCard;
