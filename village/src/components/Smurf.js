import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Smurf extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	editSmurf = (event, id) => {
		this.setState({
			name: this.props.name,
			age: this.props.age,
			height: this.props.height
		});
		this.props.editSmurf(event, id);
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		if (this.props.edit === this.props.id) {
			return (
				<form
					className="Smurf"
					onSubmit={event =>
						this.props.saveSmurf(event, this.props.id, {
							name: this.state.name,
							age: this.state.age,
							height: this.state.height
						})
					}
				>
					<input
						onChange={this.handleInputChange}
						placeholder="name"
						value={this.state.name}
						name="name"
					/>
					<br />
					<br />
					<input
						onChange={this.handleInputChange}
						placeholder="height"
						value={this.state.height}
						name="height"
					/>
					<br />
					<br />
					<input
						onChange={this.handleInputChange}
						placeholder="age"
						value={this.state.age}
						name="age"
					/>
					<br />
					<br />
					<input type="submit" value="Apply Modifications" />
				</form>
			);
		} else {
			return (
				<div className="Smurf">
					<Link to={`/smurf/${this.props.id}`}>
						<h3>{this.props.name}</h3>
					</Link>
					<strong>{this.props.height} tall</strong>
					<p>{this.props.age} smurf years old</p>
					<button onClick={event => this.props.cullSmurf(event, this.props.id)}>
						Cull Smurf
					</button>
					<button onClick={event => this.editSmurf(event, this.props.id)}>
						Modify Smurf
					</button>
				</div>
			);
		}
	}
}

export default Smurf;
