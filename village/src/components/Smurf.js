import React from 'react';
import axios from 'axios';

import UpdateForm from './UpdateForm';

import './Smurf.scss';

class Smurf extends React.Component {

  constructor() {

    super();

    this.state = {

      showUpdateForm: false,
      smurf: null

    }

  }

  toggleUpdate = e => {

    console.log(e);

    e.stopPropagation();
    this.setState({showUpdateForm: !this.state.showUpdateForm});

  }

  turnOff = () => {

    this.setState({showUpdateForm: !this.state.showUpdateForm});

  }

  render() {

    if (this.props.smurf.length === 0) {

      return <h1>Getting smurf...</h1>;

    }

    const smurf = this.props.isOwnPage ? this.props.smurf.find(smurf => smurf.id == this.props.match.params.id) : this.props.smurf;

    const { name, height, age, id } = smurf;
    const { deleteFunc } = this.props;

    return (
      <div className='page-container'>
        <div
          className="smurf"
          onClick={() => this.props.history.push(`/smurf/${id}`)}
        >
          <h3>{name}</h3>
          <strong>{height} tall</strong>
          <p>{age} smurf years old</p>
          <span
            className='delete-btn'
            onClick={() => deleteFunc(id)}>X
          </span>
          <button onClick={this.toggleUpdate}>{this.state.showUpdateForm ? 'Cancel' : 'Update'}</button>
          {this.state.showUpdateForm && <UpdateForm onClick={e => e.stopPropagation()} updateFunc={this.props.updateFunc} turnOff={this.turnOff} smurf={smurf}/>}
        </div>
      </div>
    );

  }

}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
