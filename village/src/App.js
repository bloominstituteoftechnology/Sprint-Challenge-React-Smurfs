import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Home from "./Home";
import { Route, Link, NavLink } from "react-router-dom";
import Smurf from "./components/Smurf";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			smurf: {
				name: "",
				age: "",
				height: ""
			}
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		axios
			.get("http://localhost:3333/smurfs")
			.then(response => {
				this.setState({ smurfs: response.data });
				console.log(response);
			})
			.catch(err => console.log(err));
	}
	addSmurf = event => {
		event.preventDefault();
		// add code to create the smurf using the api
		axios
			.post("http://localhost:3333/smurfs", this.state.smurf)
			.then(response => {
				this.setState({ smurfs: response.data });
			})
			.catch(err => {
				console.log(err);
			});
	};
	handleInputChange = event => {
		event.preventDefault();
		this.setState({
			smurf: {
				...this.state.smurf,
				[event.target.name]: event.target.value
			}
		});
	};

	render() {
		return (
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route
					path="/smurf-list"
					render={props => <Smurfs smurfs={this.state.smurfs} />}
				/>
				<Route
					path="/add-smurf"
					render={props => (
						<SmurfForm
							smurfs={this.state.smurfs}
							smurf={this.state.smurf}
							handleInputChange={this.handleInputChange}
							addSmurf={this.addSmurf}
						/>
					)}
				/>
				<NavLink to="/">Welcome to our village!</NavLink>
				<NavLink to="/smurf-list">Smurf List</NavLink>
				<NavLink exact to="/add-smurf">
					Add A Smurf!
				</NavLink>
			</div>
		);
	}
}

export default App;
