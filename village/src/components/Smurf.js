import React from "react";
import axios from "axios";
import SmurfCard from "./SmurfCard";

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
		return <SmurfCard smurf={this.state.smurf} />;
	}
}

export default Smurf;
