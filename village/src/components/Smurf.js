import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
      name: '',
      height: '',
      age: ''
    }
  }

  deleteSmurf = (id, props) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(function (response) {
        props.didMount();
      })
  }

  updateSmurf = (id, props) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, {
      name: this.state.name,
      height: this.state.height,
      age: this.state.age
    })
    .then(function (response) {
      props.didMount();
    })
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} cm tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={props => this.setState({showUpdate: !this.state.showUpdate})}>Update Smurf</button><button onClick={() => this.deleteSmurf(this.props.id, this.props)}>Delete Smurf</button>

      <div className={"update " + (this.state.showUpdate ? 'update-show' : 'update-hidden')}>
        <form onSubmit={props => this.updateSmurf(this.props.id, this.props)}>  
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <input type="number" placeholder="Height" name="height" value={this.state.height} onChange={this.handleInputChange} />
          <input type="number" placeholder="Age" name="age" value={this.state.age} onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <hr/>
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

