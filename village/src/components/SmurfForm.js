import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const FormAddSmurf = styled.form`
  border-bottom: 2px solid black;

  h1 {
    font-family: 'Indie Flower', cursive;
  }

  div {
    margin-bottom: 25px;

    input:not(:last-child) {
      margin-right: 25px;
    }
  }
`;

const FormRemoveSmurf = styled.div``;

const FormSubmitButton = styled.button`
  border-radius: 5px;
  width: 15%;
  height: 30px;
  outline: none;
  cursor: pointer;
  background-color: blue;
  color: white;
  border-color: blue;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 3px 10px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    border-top-color: #add8e6;
    border-left-color: #add8e6;
    background: linear-gradient(#add8e6, #0000ff);
  }

  &:active {
    border-top-color: #0000ff;
    border-left-color: #0000ff;
    border-right-color: #add8e6;
    border-bottom-color: #add8e6;
    background: linear-gradient(#0000ff, #add8e6);
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSmurf = (id, name, age, height) => {
    return {
      id,
      name,
      age,
      height
    };
  };

  addSmurf(newSmurf) {
    console.log(newSmurf);
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  removeSmurf(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  submitHandler = e => {
    this.addSmurf(
      this.createSmurf(
        this.props.smurfs[this.props.smurfs.length - 1].id + 1,
        this.state.name,
        this.state.age,
        this.state.height
      )
    );
  };

  render() {
    return (
      <div className='SmurfForm'>
        <FormAddSmurf onSubmit={e => this.submitHandler(e)}>
          <h1>Add Smurf</h1>
          <div>
            <input
              onChange={this.handleInputChange}
              placeholder='name'
              value={this.state.name}
              name='name'
            />
            <input
              onChange={this.handleInputChange}
              placeholder='age'
              value={this.state.age}
              name='age'
            />
            <input
              onChange={this.handleInputChange}
              placeholder='height'
              value={this.state.height}
              name='height'
            />
          </div>
          <div>
            <FormSubmitButton type='submit'>
              Add to the village
            </FormSubmitButton>
          </div>
        </FormAddSmurf>
      </div>
    );
  }
}

export default SmurfForm;
