import React from 'react';

const Smurf = props => {
	return (
		<div className="Smurf">
			<h3>{props.name}</h3>
			<strong>{props.height} tall</strong>
			<p>{props.age} smurf years old</p>
			{/* <button onClick={this.props.edit}>Alter Smurf</button>
			<button onClick={this.props.delete}>Terminate Smurf</button> */}
		</div>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};

export default Smurf;
