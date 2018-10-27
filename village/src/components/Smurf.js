import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SmurfContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 5px auto;
    border: solid 1px black;
    width: 20%;
    padding: 20px;
    background: palegreen;
    border-radius: 20px;
`
const Delete = styled.div`
    width: 30%;
    margin: 0 auto;
    border: solid 1px black;
    background: white;
    border-radius: 5px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
        background: tomato;
    }
`

class Smurf extends Component {
        constructor(props)   {
            super(props)
            this.state  =   {
                name: this.props.name,
                age: this.props.age,
                height: this.props.height,
                id: this.props.id,
            }
        }
        delete  =   ()  =>  {
            axios.delete(`http://localhost:3333/smurfs/${this.state.id}`)
            .then(data  =>  this.props.updateSmurfs(data))
        }
        render()    {
            const {name, height, age} =   this.state;
            return (
              <SmurfContainer>
                <h3>{name}</h3>
                <strong>{height} tall</strong>
                <p>{age} smurf years old</p>
                <Delete onClick={this.delete}>Delete</Delete>
              </SmurfContainer>
            );
        }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
