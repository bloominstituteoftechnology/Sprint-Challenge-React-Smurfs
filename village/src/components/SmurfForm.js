import React, { Component } from 'react'
import styled from 'styled-components'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault()
    const {url, name, age, height} = this.state
    let smurf = {url, name, age, height}
    this.props.add(smurf)

    this.setState({
      url: '',
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrapper>
        <div>
          <h1>Add A Smurf</h1>
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder='image url'
              value={this.state.url}
              name='url'
              />
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
              />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
              />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
              />
            <button type="submit">Add to the village</button>
          </form>
        </div>
      </FormWrapper>
    );
  }
}

export default SmurfForm;

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