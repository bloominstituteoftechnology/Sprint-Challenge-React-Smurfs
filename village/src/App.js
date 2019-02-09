import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// My files

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}
	// add any needed code to ensure that the smurfs collection exists on
	// state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	componentDidMount() {
		axios
			.get(`http://localhost:3333/smurfs`)
			.then((res) => {
				console.log('fetch smurf:', res.date);
				this.setState({
					sumrfs: res.data
				});
			})
			.catch((err) => {
				console.log('error:', err);
			});
		this.setState({
			smurfs: []
		});
	}
	addSmurf = (prop) => {
		axios
			.post(`http://localhost:3333/smurfs`, prop)
			.then((res) => {
				console.log('post:', res);
				this.setState({
					smurfs: res.data
				});
			})
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<div className="App">
				<Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
				<Route exact path="/smurf-form" render={(props) => <SmurfForm addSmurf={this.addSmurf} />} />
				<ul>
					<NavLink to="/">
						<h2>Smurf Village</h2>
					</NavLink>
					<NavLink to="/smurf-form">
						<h2>Smurf Form</h2>
					</NavLink>
				</ul>
			</div>
		);
	}
}

export default App;
