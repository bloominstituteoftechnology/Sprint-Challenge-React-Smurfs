import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.5);
  width: 30%;

  h3 {
    font-weight: bold;
    font-size: 2rem;
  }
  button {
    outline: none;
    border: transparent;
    border-radius: 5px;
    padding: 1rem 3rem;
    color: #fff;
    background: red;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

const Smurf = props => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button>Remove</button>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
