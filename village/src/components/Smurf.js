import React from 'react';
import axios from 'axios';

//attempted to reuse this component for /smurfs and /smurfs/:id, but my logic isn't going to work

const Smurf = props => {
  if (props.height && props.name && props.age) {
    return (
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    );
  } else {
    //did not realize there was no GET for /smurfs/:id in the server, this will always return 404 and not display
    let smurf = {};
    axios.get(`http://localhost:3333/smurfs/${props.match.params.id}`)
      .then(response => {
        smurf = response.data;
        return (
          <div className="Smurf">
            <h3>{smurf.name}</h3>
            <strong>{smurf.height} tall</strong>
            <p>{smurf.age} smurf years old</p>
          </div>
        );
      })
      .catch(err => alert(err + "------KNOWN ERROR"));
  };
  return null;
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

