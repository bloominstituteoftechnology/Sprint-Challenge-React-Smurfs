import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {

  // removeSmurf(props) {
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${props.id}`)
  //     .then(response => {
  //       this.props.deleteFromDB(response.data)
  //     })
  //     .catch(err => console.log(err));
  // }

  removeSmurf = (e) => {
  e.preventDefault();
  axios
    .delete(`http://localhost:3333/smurfs/${this.props.id}`)
    .then(response => {
      this.props.deleteFromDB(response.data)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        {/* UPDATE FORM */}
        {/* <form onSubmit={this.updateSmurf}>
        </form> */}
        <button onClick={this.removeSmurf}>Bye, Smurf!</button>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

