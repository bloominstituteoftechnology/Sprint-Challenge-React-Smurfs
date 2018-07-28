import React from 'react';
import '../App.css'

const Smurf = props => {
  return <div class="container mt-sm-4">
      <div class="row">
        <div class="card smurf-card mb-sm-4">
          <div class="card-header">{props.name}</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{props.height}</li>
            <li class="list-group-item">{props.age} smurfs years old</li>
          </ul>
        </div>
      </div>
    </div>;
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

