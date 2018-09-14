import React from 'react';

function Smurf(props) {
  console.log(props);
  const smurf = props.smurfs.find(
    (smurf) => smurf.id === parseInt(props.match.params.smurfId, 10)
  );
  console.log(smurf);
  if (!props.smurfs || !props.smurfs.length) {
    return <div />;
  }
  return (
    <div>
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
}

export default Smurf;
