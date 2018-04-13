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

	render() {
		return <h1>Made it to a card</h1>;
	}
}

export default SmurfCard;
