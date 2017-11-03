import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf,updateSmurf, deleteSmurf } from '../actions';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      id:'',
      name: '',
      age: '',
      height: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button onClick={this.addSmurf}>Add to the village</button>
          <button onClick={() => {
            const found = this.props.smurfs.filter(smurf => smurf.name === this.state.name)[0]

            this.setState({
              id: found.id
            }, () => {
            this.props.updateSmurf(this.state)})
          }}>Update Smurf</button>
          <button onClick={() => {
            const found = this.props.smurfs.filter(smurf => smurf.name === this.state.name)[0]
            //console.log('found:',found)
            this.props.deleteSmurf(found.id)
          }}>Delete Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf, updateSmurf, deleteSmurf })(SmurfForm);