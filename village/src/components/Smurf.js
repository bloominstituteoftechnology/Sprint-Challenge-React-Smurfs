import React from 'react';
import SmurfIcon from './SmurfIcon';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height,
      editing: false,
    }
  }

  handleDelete = props => {
    this.props.deleteSmurf(this.props.id);
  }


  handleEdit = () => {
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    this.props.editSmurf(this.props.id, smurf)
      .then(response => {
        this.props.history.push('/village')
      })
  }

  render(){
    return (
      <div className="Smurf">
        <div className='buttons'>
          <div className='button delete' onClick={this.handleDelete}>
            Delete Smurf
          </div>
          <div className='button edit' onClick={this.toggleEdit}>
            Edit Smurf
          </div>
        </div>
        <div className='icon'>
          <SmurfIcon />
        </div>
        <h3>{this.state.name}</h3>
        <strong>{this.state.height} tall</strong>
        <p>{this.state.age} smurf years old</p>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
