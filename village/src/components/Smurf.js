import React from 'react'
import styled from 'styled-components'

const Smurf = props => {
  return (
    <SMURF>
      <img src={props.url} alt={props.name}/>
      <div>
        <h2>Name:</h2>
        <pre>{props.name}</pre>
      </div>
      <div>
        <h2>Height:</h2>
        <pre>{props.height} tall</pre>
      </div>
      <div>
        <h2>Age: </h2>
        <pre>{props.age} smurf years old</pre>
      </div>
    </SMURF>
  );
};

Smurf.defaultProps = {
  img: '',
  name: '',
  height: '',
  age: ''
}

export default Smurf

const SMURF = styled.div`
  border: 1px solid black;
  font-size: 2rem;
  width: fit-content;
  padding: 1rem;
  img {
    height: 200px;
    width: 200px;
  }
  div {
    display: flex;
    h2 {
      font-weight: 700;
      width: 75px;
    }
  }
`