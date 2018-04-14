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

	componentDidMount() {
		const id = this.props.match.params.id;
		this.fetchSmurf(id);
	}
	// Get request
	fetchSmurf = id => {
		axios
			.get(`http://localhost:3333/smurfs/`)
			.then(response => this.setState({ smurf: response.data[id] }))
			.catch(error => console.error(error));
	};
	componentWillReceiveNewProps(newProps) {
		if (this.props.match.params.id !== newProps.match.params.id) {
			this.fetchSmurf(newProps.match.params.id);
		}
	}

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
