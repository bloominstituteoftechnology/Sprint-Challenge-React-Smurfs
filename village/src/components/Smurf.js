import React, { Component } from 'react';
import { EventEmitter } from '../events';
import { Link } from 'react-router-dom';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: '',
      editedName: '',
      editedAge: '',
	  editedHeight: '',
    };
  }
 
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editSmurf = (name, height, age, id) => {
    this.setState({
      editingId: id,
      editedName: name,
      editedAge: age,
      editedHeight: height
    })
  }

  submitEdit = event => {
    event.preventDefault();
    const { editingId, editedName, editedAge, editedHeight } = this.state;
    let editedSmurf = { id: editingId, name: editedName, age: editedAge, height: editedHeight }
    EventEmitter.dispatch('updateSmurf', editedSmurf)
    this.setState({
      editingId: '',
      editedName: '',
      editedAge: '',
      editedHeight: ''
    })
  }

  render() {
    const { name, height, age, id } = this.props.smurf;
    const { editingId, editedName, editedAge, editedHeight } = this.state;
    return (
      
        <div className="Smurf">
          <Link to={`/smurf/${id}`}>
           <h3>{name}</h3>
          </Link>
          <strong>{height} tall</strong>
          <p>{age} smurf years old</p>
          <div className='smurf-btns'>
            <div 
              className='smurf-btn' 
              id={id} 
              onClick={() => this.editSmurf(name, height, age, id)}>
              Edit
            </div>
            <div 
              className='smurf-btn'  
              onClick={() => EventEmitter.dispatch('deleteSmurf', id)}>
              Delete
            </div>
          </div>
          <div className={editingId === id ? 'editing-form' : 'hidden'}>
            <form onSubmit={this.submitEdit}>
              <input
                className='edit-input'
                onChange={this.handleChange}
                placeholder="name"
                value={editedName}
                name="editedName"
                required
              />
              <input
                className='edit-input'
                onChange={this.handleChange}
                placeholder="age"
                value={editedAge}
                name="editedAge"
                required
              />
              <input
                className='edit-input'
                onChange={this.handleChange}
                placeholder="height"
                value={editedHeight}
                name="editedHeight"
                required
              />
              <input className='submit-edit' type="submit" value="Submit Edits"/>
            </form>
          </div>
        </div>
      // </Link>
    )
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

