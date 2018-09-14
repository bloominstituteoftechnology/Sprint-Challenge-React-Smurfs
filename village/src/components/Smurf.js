import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Smirfed = styled.div`
  border: solid black 1px;
  padding: 2%;
  font-size: 1.4rem;
  width: 140px;
  background-color: #e1e1f4
`;

const EditSmirf = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-size: 1.2rem;
`;

const EditBTN = styled.button`
  background-color: lightgreen;
  margin-bottom: 5px;
  &:hover {
    color: white;
    background-color: green;
    cursor: pointer;
  }
`;

const DeleteBTN = styled.button`
  background-color: #ff9c9c;
  margin-bottom: 5px;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;


class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formToggle: false,
      editName: '',
      editAge: '',
      editHeight: '',
      Smurf: {},
    };
  }

  toggleForm = () => {
    this.setState({
      formToggle: !this.state.formToggle,
    })
  }

  deleteSmurf = () => {
    axios
      .delete(
        `http://localhost:3333/smurfs/${this.props.id}`
      )
      .then(response => {
        console.log(response);
        this.props.handleData(response.data);
      })
      .catch(err => console.log(err));
  }

  handleSmurf = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  editSmurf= () => {
    const editedSmurf = {
      name: this.state.editName,
      age: this.state.editAge,
      height: this.state.editHeight
    }
    axios
      .put(
        `http://localhost:3333/smurfs/${this.props.id}`,
        editedSmurf
      )
      .then(response => {
        console.log(response);
        this.props.handleData(response.data);
        this.setState({
          editName: '',
          editAge: '',
          editHeight: '',
          Smurf: {},
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <Smirfed>
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>

        {this.state.formToggle ? (
          <div>
            <EditSmirf>
              Name:
               <input
                type="text"
                placehoder="Smurf name"
                onChange={this.handleSmurf}
                name="editName"
                value={this.state.editName}
              /><br />
              Height:
              <input
                type="text"
                placehoder="friend email"
                onChange={this.handleSmurf}
                name="editHeight"
                value={this.state.editHeight}
              /><br />
              Age:
              <input
                type="text"
                placehoder="friend age"
                onChange={this.handleSmurf}
                name="editAge"
                value={this.state.editAge}
              />
            </EditSmirf>
            <div>
              <EditBTN onClick={this.editSmurf}>Submit Edit</EditBTN>
              <DeleteBTN onClick={this.deleteSmurf}>Delete Smurf</DeleteBTN>
            </div>
          </div>
        ) : null}
        <button onClick={this.toggleForm}>Toggle Form</button>
      </Smirfed>
    )
  }
}

export default Smurf;

