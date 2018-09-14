import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}

	// editSmurf = event => {
	// 	axios
	// 		.put(`http://localhost:3333/smurfs/${event.target.id}`, {
	// 			name: this.state.name,
	// 			age: this.state.age,
	// 			height: this.state.height
	// 		})
	// 		.then(response => {
	// 			this.setState({
	// 				smurfs: response.data
	// 			});
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// };

	// deleteSmurf = event => {
	// 	axios
	// 		.delete('http://localhost:3333/smurfs')
	// 		.then(response => {
	// 			this.setState({
	// 				smurfs: response.data
	// 			});
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// };

	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then(response => {
				this.setState({
					smurfs: response.data
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>
				<ul>
					{this.state.smurfs.map(smurf => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
								edit={this.editSmurf}
								delete={this.deleteSmurf}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

Smurf.defaultProps = {
	smurfs: []
};

export default Smurfs;
