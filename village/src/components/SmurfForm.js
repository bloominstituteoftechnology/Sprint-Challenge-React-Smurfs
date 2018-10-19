import React from 'react';

// class SmurfForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         name: '',
//         age: '',
//         height: ''
//     };
//   }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   axios.post('http://localhost:3333/smurfs', this.state)
  //   .then(response => this.props.setState({smurfs : response.data}))
  //   .catch(error => console.log(error));

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  // handleInputChange = e => {
  //   this.setState(
  //     {
  //       ...this.state, 
  //       [e.target.name]: e.target.value 
  //     });
  // };

//   render(props) {
//     return (
//       <div className="SmurfForm">
//         <form onSubmit={this.props.addSmurf}>
//           <input
//             onChange={this.props.handleInputChange}
//             placeholder="name"
//             value={this.props.newSmurf.name}
//             name="name"
//           />
//           <input
//             onChange={this.props.handleInputChange}
//             placeholder="age"
//             value={this.props.newSmurf.age}
//             name="age"
//           />
//           <input
//             onChange={this.props.handleInputChange}
//             placeholder="height"
//             value={this.props.newSmurf.height}
//             name="height"
//           />
//           <button type="submit">Add to the village</button>
//         </form>
//       </div>
//     );
//   }
// }
const SmurfForm = props =>{
  return (
    <div className="SmurfForm">
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.handleInputChange}
          placeholder="name"
          value={props.newSmurf.name}
          name="name"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="age"
          value={props.newSmurf.age}
          name="age"
        />
        <input
          onChange={props.handleInputChange}
          placeholder="height"
          value={props.newSmurf.height}
          name="height"
        />
        <button onClick={props.addSmurf} type="submit">Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;
