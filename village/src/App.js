import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const SMURFS_API = 'http://localhost:3333/smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			isLoading: false,
			errorMessage: '',
			form: {
				nameValue: '',
				ageValue: '',
				heightValue: ''
			}
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		this.setState({ isLoading: true });
		axios
			.get(SMURFS_API)
			.then(res => {
				this.setState({ smurfs: res.data });
			})
			.catch(err => {
				this.setState({ errorMessage: err.response.statusText });
			})
			.finally(this.setState({ isLoading: false }));
	}
	// addSmurf = () => {
	// 	this.setState({ isLoading: true });
	// 	const newSmurf = {
	// 		id: uuid(),
	// 		name: this.state.form.nameValue,
	// 		age: this.state.form.ageValue,
	// 		height: this.state.form.heightValue
	// 	};
	// 	axios
	// 		.post(SMURFS_API, { ...newSmurf })
	// 		.then(res => {
	// 			this.setState({ smurfs: res.data });
	// 		})
	// 		.catch(err => {
	// 			this.setState({ errorMessage: err.response.statusText });
	// 		})
	// 		.finally(this.setState({ isLoading: false }));
	// };
	render() {
		return (
			<Router>
				<div className="container">
					<div className="navbar">
						<li activeClassName="activeNavButton">
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li activeClassName="activeNavButton">
							<NavLink exact to="/smurfs">
								Village
							</NavLink>
						</li>
						<li activeClassName="activeNavButton">
							<NavLink exact to="/smurf-editor">
								Add a Smurf
							</NavLink>
						</li>
					</div>

					<div className="App">
						<SmurfForm />
						<Smurfs smurfs={this.state.smurfs} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
