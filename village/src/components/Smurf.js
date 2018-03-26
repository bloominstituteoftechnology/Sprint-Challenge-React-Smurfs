import React from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';


const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name} Smurf</h3>
      <p>{props.height} tall</p>
      <p>{props.age} old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>X</button>
     <button> <Link to="/UpdateForm"> Update </Link> </button>
    </div>
  
  );
}

export default Smurf;



//----------------- id parameter -----------------------------------------

// class Smurf extends Component {
  
//   state = {
//     Smurf: null,
//   };

 
//   componentDidMount () {

//     const id = this.props.match.params.id;
//     axios 
//       .get(`http://localhost:3333/smurfs/${id}`)
//       .then(response => this.setState(() => ({Smurf: response.data})) )
//       .catch(error => console.error("Somethings Wrong!"))
  
//   }
  
  
//   render () {

//     return (
//       <div className="Smurf">
//         <h3>{props.name} Smurf</h3>
//         <strong>{props.height} tall</strong>
//         <p>{props.age} old</p>
//       </div>
//     );
//   }


// }

// export default Smurf; 