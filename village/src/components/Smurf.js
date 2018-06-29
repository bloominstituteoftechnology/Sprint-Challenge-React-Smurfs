import React from 'react';
import styled from 'styled-components';

import DeleteSmurf from './DeleteSmurf';

const Card = styled.div`
  position: relative;
  border: 1px solid whitesmoke;
  box-shadow: 2px 2px 5px #0a1f42;
  margin: 30px 0;
  width: 30vw;
`
const Smurf = props => {
  return (
    <Card>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <DeleteSmurf updateState = {props.updateState} id= {props.id}/>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

