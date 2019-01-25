import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const submitTypes = {
  create: 'add',
  delete: 'remove',
  noDeleteId: 0,
  update: 'edit'
};

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

const FormRemoveSmurf = styled.form`
  border-bottom: 2px solid black;

  h1 {
    font-family: 'Indie Flower', cursive;
  }

  div {
    margin-bottom: 25px;

    select {
      /* styling */
      background-color: white;
      border: thin solid blue;
      border-radius: 5px;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;
      outline: none;
      width: 400px;
      text-align-last: center; /* Only works in chrome */

      /* reset */
      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: linear-gradient(45deg, transparent 50%, blue 50%),
        linear-gradient(135deg, blue 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), 100% 0;
      background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
      background-repeat: no-repeat;

      &:focus {
        background-image: linear-gradient(45deg, white 50%, transparent 50%),
          linear-gradient(135deg, transparent 50%, white 50%),
          linear-gradient(to right, gray, gray);
        background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
          100% 0;
        background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
        background-repeat: no-repeat;
        border-color: grey;
        outline: 0;
      }
    }
  }
`;

const FormSubmitButton = styled.button`
  border-radius: 5px;
  width: 15%;
  height: 30px;
  outline: none;
  cursor: pointer;
  color: white;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 3px 10px 1px rgba(0, 0, 0, 0.3);

  /* Add Smurf Button */
  background-color: ${props =>
    props.submitType === submitTypes.create && `blue`};
  border-color: ${props => props.submitType === submitTypes.create && `blue`};

  /* Remove Smurf Button */
  background-color: ${props =>
    props.submitType === submitTypes.delete && `red`};
  border-color: ${props => props.submitType === submitTypes.delete && `red`};

  &:hover {
    /* Add Smurf Button */
    border-top-color: ${props =>
      props.submitType === submitTypes.create && `#add8e6`};
    border-left-color: ${props =>
      props.submitType === submitTypes.create && `#add8e6`};
    background: ${props =>
      props.submitType === submitTypes.create &&
      `linear-gradient(#add8e6, #0000ff)`};

    /* Remove Smurf Button */
    border-top-color: ${props =>
      props.submitType === submitTypes.delete && `#ff0000`};
    border-left-color: ${props =>
      props.submitType === submitTypes.delete && `#ff0000`};
    background: ${props =>
      props.submitType === submitTypes.delete &&
      `linear-gradient(#ff0000, #a00000)`};
  }

  &:active {
    /* Add Smurf Button */
    border-top-color: ${props =>
      props.submitType === submitTypes.create && `#0000ff`};
    border-left-color: ${props =>
      props.submitType === submitTypes.create && `#0000ff`};
    border-right-color: ${props =>
      props.submitType === submitTypes.create && `#add8e6`};
    border-bottom-color: ${props =>
      props.submitType === submitTypes.create && `#add8e6`};
    background: ${props =>
      props.submitType === submitTypes.create &&
      `linear-gradient(#0000ff, #add8e6)`};

    /* Remove Smurf Button */
    border-top-color: ${props =>
      props.submitType === submitTypes.delete && `red`};
    border-left-color: ${props =>
      props.submitType === submitTypes.delete && `red`};
    border-right-color: ${props =>
      props.submitType === submitTypes.delete && `#ff0000`};
    border-bottom-color: ${props =>
      props.submitType === submitTypes.delete && `#ff0000`};
    background: ${props =>
      props.submitType === submitTypes.delete &&
      `linear-gradient(#a00000, #ff0000)`};
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
      },
      deleteSmurfId: submitTypes.noDeleteId
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
      <option value={smurf.id} key={smurf.id}>
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

  removeSmurf(id) {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.props.updateVillage(res.data);
      })
      .catch(err => console.log(err));
  }

  //---------------- Form Methods --------------
  handleInputChange = e => {
    this.setState({
      newSmurf: { ...this.state.newSmurf, [e.target.name]: e.target.value }
    });
  };

  deleteHandleChange = e => {
    this.setState({
      deleteSmurfId: e.target.value
    });
  };

  submitHandler = (e, submitType, id) => {
    e.preventDefault();
    if (submitType === submitTypes.create) {
      if (
        this.state.newSmurf.name &&
        this.state.newSmurf.age &&
        this.state.newSmurf.height
      ) {
        this.addSmurf(e);
        this.clearNewSmurfState();
      }
    } else if (submitType === submitTypes.delete) {
      if (id !== `${submitTypes.noDeleteId}` && id !== submitTypes.noDeleteId)
        this.removeSmurf(id);
    }
  };

  //========================== Render ==========================
  render() {
    return (
      <div className='SmurfForm'>
        <FormAddSmurf
          onSubmit={e =>
            this.submitHandler(e, submitTypes.create, submitTypes.noDeleteId)
          }
        >
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
            <FormSubmitButton type='submit' submitType={submitTypes.create}>
              Add to the village
            </FormSubmitButton>
          </div>
        </FormAddSmurf>
        <FormRemoveSmurf
          onSubmit={e =>
            this.submitHandler(e, submitTypes.delete, this.state.deleteSmurfId)
          }
        >
          <h1>Remove Smurf from Village</h1>
          <div>
            <FormSubmitButton type='submit' submitType={submitTypes.delete}>
              Remove from the village
            </FormSubmitButton>
          </div>
          <div>
            <select onChange={this.deleteHandleChange}>
              <option
                value={submitTypes.noDeleteId}
                key={submitTypes.noDeleteId}
              >
                Select Smurf
              </option>
              {this.renderSortedSmurfList()}
            </select>
          </div>
        </FormRemoveSmurf>
      </div>
    );
  }
}

export default SmurfForm;
