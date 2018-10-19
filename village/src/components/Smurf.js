import React from 'react';

import axios from 'axios';

import EditSmurf from './editSmurf';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editSmurf: false,
      editName: '',
      editAge: '',
      editHeight: ''
    }
  }


  openEditForm = () => {
    this.setState({ editSmurf: !this.state.editSmurf });
  };

  deleteSmurf = event => {
    event.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        this.props.addNewSmurf(response.data)
      })

      .catch(err =>
        console.log(err));
  }

  editSmurfHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


  saveEdits = event => {
    event.preventDefault();
    const findSmurfById = {
      name: this.state.editName,
      age: this.state.editAge,
      height: this.state.editHeight
    }
    axios.put(`http://localhost:3333/smurfs/${this.props.id}`, findSmurfById)
      .then(response => {
        this.props.addNewSmurf(response.data)
      })

      .catch(err =>
        console.log(err));

    this.setState({
      editName: '',
      editAge: '',
      editHeight: ''
    });
  }

  render() {
    return (
      <div className="Smurf">
        <div className='smurf-text'>

          <h3>{this.props.name}</h3>
          <strong>{this.props.height}cm tall</strong>
          <p>{this.props.age} smurf years old</p>
          {this.state.editSmurf ? (
            <EditSmurf editSmurfHandler={this.editSmurfHandler}
              smurf={this.props.smurf}
              saveEdits={this.saveEdits} />
          ) : null}
          <button onClick={this.openEditForm}>Edit</button>
          <button onClick={this.deleteSmurf}>Delete</button>

        </div>
      </div>
    );
  };

}
Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

