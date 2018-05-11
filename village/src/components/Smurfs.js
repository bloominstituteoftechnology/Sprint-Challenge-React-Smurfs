import React, { Component } from 'react';

import Smurf from './Smurf';
import axios from 'axios';

class Smurfs extends Component {
  state={ 
    isEditing: false,
    input: {
      editSmurfId: '',
      name: '', 
      age: '', 
      height: '' 
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: { 
        ...this.state.input,
        [e.target.name]: e.target.value
      }      
    })
  }
  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=> 
      this.props.refreshSmurf()
    )
    .catch(err => console.log(err)) // to-do: display error message
  }
  switchToTextMode = () => {
    this.setState({
      isEditing: false,
      input: {
        editSmurfId: '', name: '', age: '', height: ''
      }
    })
  }
  switchToEditMode = (smurf) => {
    const { id, name, age, height } = smurf
    this.setState({
      isEditing: true,
      input: {
        editSmurfId: id,
        name, age, height
      }
    })
  }
  editSmurf = (id) => {
    const { name, age, height } = this.state.input
    axios.put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
    .then(res =>
      this.props.refreshSmurf()
    )
    .catch(err => console.log(err)) // to-do: display error message

    this.setState({
      isEditing: false,
      input: {
        editSmurfId: '', name: '', age: '', height: ''
      }      
    })
  }
  render() {
    const { isEditing } = this.state
    const { editSmurfId, name, age, height } = this.state.input
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return isEditing && smurf.id === editSmurfId ?
            (
              <div key={smurf.id}>
                <input name="name" type="text" value={name} onChange={e => this.handleChange(e)}/>
                <input name="age" type="text" value={age} onChange={e => this.handleChange(e)}/>
                <input name="height" type="text" value={height} onChange={e => this.handleChange(e)}/>
                <button onClick={() => this.editSmurf(smurf.id)}>Submit Changes</button>
                <button onClick={this.switchToTextMode}>Cancel</button>
              </div>
            )
            :
            (              
              <div key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <button onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
                <button onClick={() => this.switchToEditMode(smurf)}>Edit</button>
              </div>
            )            
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
