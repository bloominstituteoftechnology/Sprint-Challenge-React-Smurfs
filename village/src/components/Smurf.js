import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};




// class Smurf extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       smurf: []
//     }
//   }

//   // componentDidMount() {
//   //   const id = this.props.match.params.id;
//   //   this.fetchSmurf(id);
//   // }

//   fetchSmurf = id => {
//     axios
//       .get(`http://localhost:3333/api/movies/${id}`)
//       .then(response => {
//         this.setState(() => ({smurf:response.data}))
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   render() { 

//     const {name, age, height} = this.state.smurf;
//     return (
//       <div onClick = {this.fetchSmurf} className="Smurf">
//         <h3>{name}</h3>
//         <strong>{height} tall</strong>
//         <p>{age} smurf years old</p>
//       </div>
//     )
//   }
  
// }

export default Smurf;

