import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

    deleteSmurf = () => {
      axios
        .delete(`http://localhost:3333/smurfs/${this.props.id}`)
        .then(response => {
          console.log(response.data);
          this.props.setData(response.data);
        })
        .catch(err => {
          console.log(`DELETE Error: ${err}`);
        })
    }

  render() {
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={this.deleteSmurf}>Snuff Smurf</button>
    </div>
  );
}

}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
