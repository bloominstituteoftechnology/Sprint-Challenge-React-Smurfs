import React from 'react';
import { Link } from 'react-router-dom';

const SmurfPage = props => {
  const smurf = props.getSmurf(parseInt(props.match.params.id, 10));
  return(
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={()=>props.edit({isEditing: true, editingID: smurf.id})}>Edit Smurf</button>
      <button
        onClick={
          ()=>{
            props.deleteASmurf(smurf.id); 
            props.history.push('/smurfs');
          }
        }>
        Delete Smurf
      </button>
      <Link to="/smurfs">Go Back to the Village</Link>
    </div>
  );
}

SmurfPage.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfPage;
