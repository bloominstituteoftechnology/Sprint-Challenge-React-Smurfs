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

  deleteSmurf = (e, id) => {

    e.stopPropagation();
    this.props.deleteFunc(id);
    this.props.history.push('/');

  }

  render() {

    const smurf = this.props.isOwnPage
      ? this.props.smurfList.find(smurf => smurf.id == this.props.match.params.id)
      : this.props.smurf;

    if (!smurf) {

      return <h1 style={{textAlign: 'center'}}>No smurf found!</h1>;

    }

    const { name, height, age, id } = smurf;

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
            onClick={e => this.deleteSmurf(e, id)}>X
          </span>
          <button onClick={this.toggleUpdate}>
            {this.state.showUpdateForm ? 'Cancel' : 'Update'}
          </button>
          {this.state.showUpdateForm &&
            <UpdateForm
              onClick={e => e.stopPropagation()}
              updateFunc={this.props.updateFunc}
              turnOff={this.turnOff}
              smurf={smurf}
            />}
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
