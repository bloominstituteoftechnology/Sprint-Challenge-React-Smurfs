import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			smurf: {
				name: '',
				age: '',
				height: '',
			},
		};
	}
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then((response) => {
				this.setState(() => ({ smurfs: response.data }));
			})
			.catch((error) => {
				console.error(error);
			});
	}

	handleChange = (event) => {
		this.setState({
			smurf: {
				...this.state.smurf,
				[event.target.name]: event.target.value,
			},
		});
	};

	/* handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('http://localhost:3333/smurfs', this.state.smurf)
			.then((response) => {
				this.setState(
					{
						smurfs: response.data,
						smurf: { name: '', age: '', email: '' },
					},
					() => this.props.history.push('/')
				);
			});
	}; */

	render() {
		return (
			<div className="App">
				<NavLink exact to="/">
					Smurfs
				</NavLink>
				<NavLink to="smurf-form">Add Smurf</NavLink>
				<Route path="/smurf-form" component={SmurfForm} />
				<Route
					exact
					path="/"
					render={(props) => <Smurfs smurfs={this.state.smurfs} />}
				/>
			</div>
		);
	}
}

export default App;
