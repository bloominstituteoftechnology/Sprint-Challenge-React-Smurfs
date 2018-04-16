import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class EditSmurf extends React.Component {
	constructor(props) {
		super(props);
		super(props);
		this.state = {
            Lists: [],
            smurf: this.props.smurf,
			Name: '',
			Age: '',
            Height: '',
            
			showUpdateForm: false
		};
	}
	showUpdateForm = () => {
		this.setState({ showUpdateForm: !this.state.showUpdateForm });
	};
	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	deleteSmurf = (SmurfID) => {
		axios
			.delete(`http://localhost:3333/smurfs/${SmurfID}`)
			.then((response) => {
				this.props.getAJAX();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	updateSmurf = (SmurfID) => {
		const smurf = { name: this.state.Name, height: this.state.Height, age: this.state.Age};
        console.log('update smurf',smurf)
        axios
			.put(`http://localhost:3333/smurfs/${SmurfID}`, smurf)
			.then((response) => {
				this.props.getAJAX();
				this.setState({
					showUpdateForm: false,
					Name: '',
					Age: '',
					Height: ''
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
        const {id, name, age, height} = this.props.smurf;
        console.log(this.props.smurf)
        console.log(id,name,age,height)
		return (
			<div>
				<button onClick={this.showUpdateForm}>Edit smurf {name}</button>
				{this.state.showUpdateForm ? (
					<div>
						<input
							type="text"
							onChange={this.handleInputChange}
							placeholder={name}
							name="Name"
							value={this.state.Name}
						/>
						<input
							type="text"
							onChange={this.handleInputChange}
							placeholder={height}
							name="Height"
							value={this.state.Height}
						/>
						<input
							type="text"
							onChange={this.handleInputChange}
							placeholder={age}
							name="Age"
							value={this.state.Age}
						/>
						<button onClick={() => this.updateSmurf(id)}>Save Smurf Details</button>
						<button onClick={() => this.deleteSmurf(id)}>Delete Smurf</button>
					</div>
				) : null}
			</div>
		);
	}
}
export default EditSmurf;
