import React from 'react';
import {Route} from 'react-router-dom';
import Delete from './Delete'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <Route path = "village/:id" render = {(props) =>
      <Delete {...props} handleDelete = {props.handleDelete} />
      } />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

