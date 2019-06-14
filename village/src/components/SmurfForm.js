import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';

const SMURFS_API = 'http://localhost:3333/smurfs';

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}

	addSmurf = event => {
		event.preventDefault();
		// add code to create the smurf using the api
		const newSmurf = {
			id: uuid(),
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		};
		axios
			.post(SMURFS_API, { ...newSmurf })
			.then(res => {
				this.setState({ smurfs: res.data });
			})
			.catch(err => {
				this.setState({ errorMessage: err.response.statusText });
			});
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="smurf-form">
				<form onSubmit={this.addSmurf}>
					<input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
					<input
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<button type="submit">Add to the village</button>
				</form>
			</div>
		);
	}
}

export default SmurfForm;
