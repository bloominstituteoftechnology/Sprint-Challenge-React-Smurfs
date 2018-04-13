import React from "react";
import axios from "axios";
import Smurf from "./Smurf";

class SmurfCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			height: "",
			age: ""
		};
	}
	// fetch a smurf by id
	componentDidMount() {
		const { id } = this.props.paramds.match;
	}

	// pass a smurf to Smurf component to render
	render() {
		return <h1>Made it to a card</h1>;
	}
}

export default SmurfCard;
