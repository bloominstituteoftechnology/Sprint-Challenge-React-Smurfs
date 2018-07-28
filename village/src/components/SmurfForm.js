import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      buttonText: '',
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  submitSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.smurf.name,
      age: Number(this.state.smurf.age),
      height: this.state.smurf.height
    }

    if (this.props.location.pathname.includes('/update')) {
      this.props.onSubmitSmurf(this.state.id, smurf);
    } else {
      this.props.onSubmitSmurf(smurf);
    }

    this.setState({smurf: {
      name: '',
      age: '',
      height: ''
    }});
  }

  handleInputChange = e => {
    const smurf = this.state.smurf;
    smurf[e.target.name] = e.target.value;
    this.setState({ smurf: smurf });
  };

  componentDidUpdate(prevProps) {
    let id;

    if(prevProps.smurfs !== this.props.smurfs) {

      if (this.props.location.pathname.includes('/update')) {
        if (this.props.match) {
          let smurfs = this.props.smurfs.slice();
          id = Number(this.props.match.params.smurfID);
          this.setState({id: id});
          console.log(id, smurfs);
          smurfs = smurfs.filter(item => item.id === id);
          console.log(smurfs[0]);
          if (smurfs[0]) {
            this.setState({ smurf: {
              name: smurfs[0].name,
              age: smurfs[0].age,
              height: smurfs[0].height
            }});
          }
        }
      }

    }
  }

  componentDidMount() {
    let buttonText = 'Add to the village';

    if (this.props.location.pathname.includes('/update')) {
      buttonText = 'Update Smurf';
    }

    this.setState({buttonText: buttonText});
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">{this.state.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
