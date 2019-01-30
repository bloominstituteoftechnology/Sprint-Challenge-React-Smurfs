import React from 'react';
import { Link } from 'react-router-dom';
import "./Smurf.css";


const Smurf = props => {
  console.log("SmurfDetail props", props);
  return (
    <div className="smurf-list">
      <h3>ID: {props.match.params.id}</h3>
      <div className="smurf-list-card">
        <p>NAME: {props.location.state.name} Smurf</p>
        <br />
        <p>AGE: {props.location.state.age} smurf years</p>
        <br />
        <p>HEIGHT: {props.location.state.height} cm</p>
        <br />
      </div>
      <ul>
        <li>
          <Link to="/village"> Back to the Village</Link>
        </li>
      </ul>
    </div>
  );
};

export default Smurf;
