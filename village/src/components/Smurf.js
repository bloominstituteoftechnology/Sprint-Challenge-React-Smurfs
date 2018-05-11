import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import SmurfForm from './SmurfForm';

const DiscreteSmurf = styled.div`
  width: 30%;
  border: 2px dotted white;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
`;

const Smurf = props => {

  const sendtoSHADOWREALM = () => {
    alert(`Sending ${props.name} on a journey... to the SHADOW REALM`);
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(response => props.update(response.data))
      .catch(error => console.log(error));
  }

  return (
    <DiscreteSmurf className="Smurf">
      <Link to={`/smurfs/${props.id}`}>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </Link>
      <Link to={`/smurfs/update/${props.id}`}><button>Transform...WITH MAGIC!</button></Link>
      <button onClick={sendtoSHADOWREALM}>Send {props.name} on a journey...</button>
      <Route path={`/smurfs/update/${props.id}`} render={() => <SmurfForm id={props.id} op="edit" update={props.update} />} />
    </DiscreteSmurf>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

