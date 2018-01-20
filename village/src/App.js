import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import EditSmurf from './components/EditSmurf';
import Smurfs from './components/Smurfs';

class App extends Component {
	state = {
		smurfs: [],
		isEditingVillage: null,
		isEditingSmurf: null,
		editingSmurfId: null,
	};

	componentDidMount() {
		this.loadVillage();
		this.setState({ isEditingVillage: false });
		this.setState({ isEditingSmurf: false });
		this.setState({ editingSmurfId: -1 });
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

	editVillage = () => {
		this.setState({ isEditingVillage: true });
	};

	editVillageFinish = () => {
		this.setState({ isEditingVillage: false });
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

	editSmurf = id => {
		this.setState({ isEditingSmurf: true, editingSmurfId: id });
	};

	cancelEditSmurf = () => {
		this.setState({ isEditingSmurf: false });
	};

	render() {
		// console.log(this.state.isEditingSmurf);
		return (
			<div className="App">
				{this.state.isEditingSmurf ? (
					<EditSmurf
						id={this.state.editingSmurfId}
						loadVillage={this.loadVillage}
						cancelEditSmurf={this.cancelEditSmurf}
					/>
				) : (
					<SmurfForm loadVillage={this.loadVillage} />
				)}

				<Smurfs
					smurfs={this.state.smurfs}
					isEditingVillage={this.state.isEditingVillage}
					editVillage={this.editVillage}
					editVillageFinish={this.editVillageFinish}
					delete={this.deleteSmurf}
					isEditingSmurf={this.state.isEditingSmurf}
					editSmurf={this.editSmurf}
					cancelEditSmurf={this.cancelEditSmurf}
				/>
			</div>
		);
	}
}

export default App;
