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

const FormRemoveSmurf = styled.div`
  border-bottom: 2px solid black;

  h1 {
    font-family: 'Indie Flower', cursive;
  }

  select {
    outline: none;
    width: 200px;
    text-align-last: center; /* Only works in chrome */
  }
`;

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
      sortedSmurfsByName: [],
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  //========================== Methods =========================
  componentDidMount() {
    this.sortSmurfsByName(this.props.smurfs);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.smurfs !== this.props.smurfs) {
      this.sortSmurfsByName(this.props.smurfs);
    }
  }

  //-------------- Support Methods -------------
  createSmurf = (name, age, height) => {
    return {
      name,
      age,
      height
    };
  };

  clearNewSmurfState = () => {
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  };

  sortSmurfsByName = smurfs => {
    const sortedSmurfs = smurfs.slice().sort(function(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
    this.setState({ sortedSmurfsByName: sortedSmurfs });
  };

  renderSortedSmurfList = () => {
    return this.state.sortedSmurfsByName.map(smurf => (
      <option value={smurf.name} key={smurf.id}>
        {smurf.name}
      </option>
    ));
  };

  //------------ AJAX/Axios Methods ------------
  addSmurf(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', this.state.newSmurf)
      .then(res => {
        this.props.updateVillage(res.data);
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

  //---------------- Form Methods --------------
  handleInputChange = e => {
    this.setState({
      newSmurf: { ...this.state.newSmurf, [e.target.name]: e.target.value }
    });
  };

  submitHandler = e => {
    this.addSmurf(e);
    this.clearNewSmurfState();
  };

  //========================== Render ==========================
  render() {
    return (
      <div className='SmurfForm'>
        <FormAddSmurf onSubmit={e => this.submitHandler(e)}>
          <h1>Add Smurf to Village</h1>
          <div>
            <input
              onChange={this.handleInputChange}
              placeholder='name'
              value={this.state.newSmurf.name}
              name='name'
            />
            <input
              onChange={this.handleInputChange}
              placeholder='age'
              value={this.state.newSmurf.age}
              name='age'
            />
            <input
              onChange={this.handleInputChange}
              placeholder='height'
              value={this.state.newSmurf.height}
              name='height'
            />
          </div>
          <div>
            <FormSubmitButton type='submit'>
              Add to the village
            </FormSubmitButton>
          </div>
        </FormAddSmurf>
        <FormRemoveSmurf>
          <h1>Remove Smurf from Village</h1>
          <select>
            <option value='Select Smurf' key={0}>
              Select Smurf
            </option>
            {this.renderSortedSmurfList()}
          </select>
        </FormRemoveSmurf>
      </div>
    );
  }
}

export default SmurfForm;
