import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';
import PropTypes from 'prop-types';

// import Smurf from './Smurf';

class Smurfs extends Component {
	constructor(props) {
    super(props)

	}
	


	render() {
		return (
			<div className="Smurfs">
				<h1>Smurf Village</h1>

				<ul>
					{this.props.smurfs.map((smurf) => {
						return (
							<Smurf
								editSmurf={this.editSmurf}
								showUpdateForm={this.showUpdateForm}
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Smurfs;
