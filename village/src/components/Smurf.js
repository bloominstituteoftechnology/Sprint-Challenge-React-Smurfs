import React from 'react';

const Smurf = props => {
  const { id, name, age, height} = props
  const handleClick = (event) => {
    event.preventDefault();
    props.deleteSmurf({id: id})
    if (props.modifySmurf)
      props.history.push('/');
  }
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button className="button" to="/" onClick={handleClick}>
        Delete {name}
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

