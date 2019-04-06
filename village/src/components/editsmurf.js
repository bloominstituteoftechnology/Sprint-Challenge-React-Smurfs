import React, { Component } from 'react'
import styled from 'styled-components'

class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url: '',
        name: '',
        age: '',
        height: ''
    }
  }
  editSmurf = event => {
    event.preventDefault()
    const {url, name, age, height} = this.state
    let smurf = {url, name, age, height}
    smurf.id = this.props.match.params.id
    this.props.edit(smurf)

    this.setState({
      url: '',
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrapper>
        <div>
          <h1>Change A Smurf</h1>
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder='url'
              value={this.state.url}
              name='url'
              />
            <input
              onChange={this.handleInputChange}
              placeholder='name'
              value={this.state.name}
              name="name"
              />
            <input
              onChange={this.handleInputChange}
              placeholder='age'
              value={this.state.age}
              name="age"
              />
            <input
              onChange={this.handleInputChange}
              placeholder='height'
              value={this.state.height}
              name="height"
              />
            <button onClick={this.editSmurf}>Change</button>
          </form>
        </div>
      </FormWrapper>
    );
  }
}

export default EditSmurf;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  div {
    border: 1px solid #222;
    border-radius: 5px;
    padding: 1rem;
    h1 {
      font-size: 3.14159rem;
      font-weight: 700;
      text-align: center;
      margin: 0.5rem 0;
      color: #222;
    }
    form {
      display: flex;
      flex-direction: column;
      font-size: 1.6rem;
      
      input {
        text-align: right;
        padding: 1rem 2rem;
        margin: 0.5rem 0;
        outline: none;
      }
      button {
        font-weight: 700;
        padding: 1rem 2rem;
      }
    }
  }
`