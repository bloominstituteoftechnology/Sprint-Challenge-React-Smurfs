import React from 'react';

import UpdateForm from './UpdateForm';

class Smurf extends React.Component {

  constructor() {

    super();

    this.state = {

      showUpdateForm: false

    }

  }

  toggleUpdate = () => {

    this.setState({showUpdateForm: !this.state.showUpdateForm});

  }

  render() {

    const { name, height, age, id } = this.props.smurf;
    const { deleteFunc } = this.props;

    return (
      <div className="Smurf">
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
        <span
          className='delete-btn'
          onClick={() => deleteFunc(id)}>X
        </span>
        <button onClick={this.toggleUpdate}>{this.state.showUpdateForm ? 'Cancel' : 'Update'}</button>
        {this.state.showUpdateForm && <UpdateForm updateFunc={this.props.updateFunc} turnOff={this.toggleUpdate} smurf={this.props.smurf}/>}
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
