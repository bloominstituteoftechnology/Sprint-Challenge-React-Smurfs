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

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addNewSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  update = event => {
    this.props.updateSmurf(this.props.match.params.id, this.state);

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


  componentDidMount() {

    if(this.props.edit) {
      if(this.props.data.length === 0) {
        return <div>Loading</div>
      }
      else {
        const info = this.props.data.find(smurf => `${smurf.id}` === this.props.match.params.id);
        this.setState({
          name: info.name,
          age: info.age,
          height: info.height,
        });
      }
    }
  }


  render() {

    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.edit ? this.update : this.addSmurf}>
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
          <button type="submit">{this.props.edit ? 'Update Smurf Info' : 'Add to the village'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
