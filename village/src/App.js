import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			smurf: {
				name: '',
				age: '',
				height: ''
			},
			form: {
				name: 'Home',
				location: '/'
			},
			home: {
				name: 'Add a Smurf',
				location: '/smurf-form'
			}
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs', this.state.smurfs)
			.then((res) => {
				this.setState({
					smurfs: res.data,
					smurf: this.state.smurf
				});
			})
			.catch((err) => console.log(err));
	}

	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		console.log(this.state.form.location);
		return (
			<div className="App">
				<Route
					exact
					path="/"
					render={(props) => (
						<NavBar {...props} location={this.state.home.location} name={this.state.home.name} />
					)}
				/>
				<Route
					exact
					path="/smurf-form"
					render={(props) => (
						<NavBar {...props} location={this.state.form.location} name={this.state.form.name} />
					)}
				/>
				<Route
					exact
					path="/smurf-form"
					render={(props) => <SmurfForm {...props} smurfs={this.state.smurfs} addSmurf={this.addSmurf} />}
				/>
				<Route exact path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
			</div>
		);
	}
}

export default App;
