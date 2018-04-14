import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Smurf extends React.Component {
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
