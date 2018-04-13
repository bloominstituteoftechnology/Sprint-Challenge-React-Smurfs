import React from "react";
import axios from "axios";
import Smurf from "./Smurf";

class SmurfCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			smurf: null
		};
	}
	// fetch a smurf by id
	componentDidMount() {
		const { id } = this.props.match.params;
		this.fetchSmurf(id);
	}
	// Get request
	fetchSmurf = id => {
		axios
			.get("http://localhost:3333/smurfs")
			.then(response => this.setState({ smurf: response.data[id] }))
			.catch(error => console.error(error));
	};
	//

	// pass a smurf to Smurf component to render
	render() {
		return <h1>Made it to a card</h1>;
	}
}

export default SmurfCard;
