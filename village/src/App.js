import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	state = {
		smurfs: [],
	};

	componentDidMount() {
		this.loadVillage();
	}

	loadVillage = () => {
		const stream = 'http://localhost:3333/smurfs';

		axios
			.get(stream)
			.then(response => {
				this.setState({ smurfs: response.data });
			})
			.catch(error => {
				console.error(error);
			});
	};

	deleteSmurf = id => {
		const stream = `http://localhost:3333/smurfs/${id}`;

		axios
			.delete(stream)
			.then(response => {
				this.loadVillage();
			})
			.catch(error => {
				console.error(error);
			});
	};

	render() {
		return (
			<div className="App">
				<SmurfForm loadVillage={this.loadVillage} />

				<Smurfs smurfs={this.state.smurfs} delete={this.deleteSmurf} />
			</div>
		);
	}
}

export default App;
