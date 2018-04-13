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
	// Event Handlers
	handleNewInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// console.log("props", props);
	render() {
		// console.log("name", this.state.name);
		// console.log("height", this.state.height);
		// console.log("age", this.state.age);
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
				</form>
			</div>
		);
	}
}

export default Smurf;
