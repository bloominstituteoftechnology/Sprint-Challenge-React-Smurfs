import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			smurf: props.smurf
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs', this.state.smurf)
			.then((res) => {
				this.setState({
					smurfs: res.data,
					smurf: {
						name: '',
						age: '',
						height: ''
					}
				});
			})
			.catch((err) => console.log(err));
	}

	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<div className="App">
				<Route
					path="/"
					render={(props) => <SmurfForm {...props} smurfs={this.state.smurfs} addSmurf={this.addSmurf} />}
				/>
				<Route path="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
			</div>
		);
	}
}

export default App;
