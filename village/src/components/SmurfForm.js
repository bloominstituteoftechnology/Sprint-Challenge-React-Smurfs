import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}

	addSmurf = (event) => {
		event.preventDefault();
		// add code to create the smurf using the api

		const { name, age, height } = this.state;
		const payload = { name, age, height };

		axios
			.post('http//localhost:3333/smurfs', payload)
			.then((res) => {
				console.log(res.data);
				this.setState({
					name: res.data.name,
					age: res.data.age,
					height: res.data.height
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
    <div className="smurfformbox">
			<div className="SmurfForm">
        
				<form onSubmit={this.addSmurf}>
					<input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
					<input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
					<input onChange={this.handleInputChange} placeholder="height" value={this.state.height} name="height" />
					<button type="submit">Submit</button>
				</form>
			</div>
      </div>
		);
	}
}

export default SmurfForm;
