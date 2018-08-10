import React from "react";
import SmurfForm from './SmurfForm';

class Smurf extends React.Component {
	state = {
		showForm: false
	};

	toggleForm = () =>
		this.setState(({ showForm }) => ({
			showForm: !showForm
		}));

	render() {
    const decoratedOnSubmit = data => {
      this.props.onGeneticallyAlterSmurf(data);
      this.setState({
        showForm: false
      });
    }
		return (
			<div className="Smurf">
				<h3>{ this.props.name }</h3>
				<strong>{ this.props.height } tall</strong>
				<p>{ this.props.age } smurf years old</p>
				<button onClick={ this.props.onKillSmurf }>Murder Smurf</button>
        <button onClick={ this.toggleForm }>Genetically Alter Smurf</button>
        { this.state.showForm ? (
          <SmurfForm onSubmit={ decoratedOnSubmit } title={"Genetically Alter Smurf"} />
        ) : null}
			</div>
		);
	}
}

Smurf.defaultProps = {
	name: "",
	height: "",
	age: ""
};

export default Smurf;
