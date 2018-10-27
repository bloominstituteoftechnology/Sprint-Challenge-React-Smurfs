import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import UpdateForm from './UpdateForm';

const Icon = styled.i`
color: darkcyan;
margin-left: 40p;
cursor: 'pointer';
&:last-child {
  margin-left: 10px;
}
`
const IconContainer = styled.div`
display: flex;
width: 5%;
justify-content: space-between;
`
const Container = styled.div`
display: flex;
justify-content: space-around;
width: 60%;
margin: 0 auto;
`

const Smurf = props => {
  return (
    <div className="Smurf">
      <Container>
          <h3>{props.name}</h3>
          <IconContainer><Icon onClick={() => props.history.push('/smurf-update-form')} className="fas fa-edit"></Icon><Icon onClick={() => props.deleteSmurf(props.id)} className="fas fa-trash-alt"></Icon></IconContainer>
      </Container>
      
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Route path="/smurf-update-form" render={props => <UpdateForm {...props} updateSmurf={props.updateSmurf} id={props.id} />} />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

