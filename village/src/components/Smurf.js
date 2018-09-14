import React from 'react';

const Smurf = props => {
  const smurf = props.list.find(smurf => smurf.id === parseInt(props.match.params.id, 10));

  const hdldlt = () => {
    props.rmsmf(smurf.id);
    props.history.push("/smurfs")
  }
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={event => {
        event.preventDefault();
        props.rdrtfrm(event, smurf.id)
      }}>Update Smurf</button>
      <button onClick={hdldlt}>Remove</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

