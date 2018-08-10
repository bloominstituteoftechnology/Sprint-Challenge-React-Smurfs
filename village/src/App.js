import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Header from "./components/Header";

let API_URL = "http://localhost:3333/smurfs";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}

	actualAddSmurf = data => {
		axios
			.post(`${API_URL}`, data)
			.then(response => this.setState({ smurfs: response.data }));
	};

	killSmurf = id => {
		axios
			.delete(`${API_URL}/${id}`)
			.then(response => this.setState({ smurfs: response.data }));
	};

	geneticallyAlterSmurf = (id, data) => {
		axios
			.put(`${API_URL}/${id}`, data)
			.then(response => this.setState({ smurfs: response.data }));
	};

	componentDidMount() {
		axios.get(API_URL).then(response => {
			this.setState({
				smurfs: response.data
			});
		});
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<div className="App">
				<Route exact path="/" component={Header} />
				<Route
					path="/smurfs"
					render={() => (
						<div>
							<SmurfForm 
							onActualAddSmurf={ this.actualAddSmurf }/>
							<Smurfs
								onGeneticallyAlterSmurf={
									this.geneticallyAlterSmurf
								}
								onKillSmurf={this.killSmurf}
								smurfs={this.state.smurfs}
							/>
						</div>
					)}
				/>
			</div>
		);
	}
}

export default App;
