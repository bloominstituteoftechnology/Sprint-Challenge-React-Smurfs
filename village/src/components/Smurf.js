import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios';



const Smurf = props => {
  return (
    <div className="Smurf">
      {/* Stretch? added font-awesome libraries and icon */}
      <h3 className='smurf-name'><FontAwesomeIcon icon="ghost" />     {props.name}</h3>
      <strong className='height'>{props.height} tall</strong>
      <p className='age'>{props.age} smurf years old</p>
    </div>
  );

  // STRETCH DELETE FUNCTIONALITY 
  //   function handleDelete() {
  //   props.handleDelete(props.smurfs.id);
  //   props.history.push('/smurfs');
  // };
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


// TRIED TO ADD DELETE BUTTON BUT CAUSED ISSUES SO I COMMENTED OUT

// import React from 'react';

// function Smurf (props) {
//     console.log(props);
//     const smurf = props.smurfs.find(
//       smurf => `${smurf.id}` === props.match.params.id
//     );
//   // TODO: STRETCH: Delete smurfs
//   function handleDelete() {
//     props.handleDelete(props.smurfs.id);
//     props.history.push('/smurfs');
//   };
 
//   return (
//     <div className="Smurf">
//       <h3>{props.name}</h3>
//       <strong>{props.height} tall</strong>
//       <p>{props.age} smurf years old</p>
//       <button onClick={handleDelete} >Delete</button>
//     </div>
//   );
// };

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

// export default Smurf;