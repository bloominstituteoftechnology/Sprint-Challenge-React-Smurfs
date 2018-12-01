import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    if (this.props.edit){
      const smurf = this.props.smurfs.find((smurf) => { return smurf.id.toString() === this.props.match.params.id});
      if (smurf){
        this.setState({
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
        })
      }
  }
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addData(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  }

  editSmurf = event => {
    event.preventDefault();
    this.props.updateData(this.state, this.props.match.params.id)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <p className='SmurfForm-title'>{this.props.edit ?  'Rewrite that Smurf' : 'Add a Smurf'}</p>
        <form onSubmit={this.props.edit ? this.editSmurf : this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.props.edit ? 'Release back to the village' : 'Add to the village' }</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
