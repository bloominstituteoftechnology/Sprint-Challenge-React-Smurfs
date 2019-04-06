import React from 'react';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      nameInput: this.props.name,
      ageInput: this.props.age,
      heightInput: this.props.height,
    };
  }
  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  initializeUpdate = e => {
    e.preventDefault();
    const [name, age, height] = [this.state.nameInput, this.state.ageInput, this.state.heightInput];
    this.setState({ editing: false });
    this.props.updateSmurf(this.props.id, { name, age, height });
  }
  render(){
    return this.state.editing 
      ? (
        <form onSubmit={this.initializeUpdate} className="update-form">
          <button  onClick={() => this.setState({ editing: false })}>Cancel</button>
          <input 
            placeholder="Name"
            onChange={this.handleUpdate}
            name="nameInput"
            value={this.state.nameInput}
          />
          <input 
            placeholder="Age"
            type="number"
            onChange={this.handleUpdate}
            name="ageInput"
            value={this.state.ageInput}
          />
          <input 
            placeholder="Height"
            onChange={this.handleUpdate}
            name="heightInput"
            value={this.state.heightInput}
          />
          <button>Submit</button>
        </form>
      )
      : (
      <div className="Smurf">
        <button class="edit"onClick={() => this.setState({ editing: true })}>Edit</button>
        <h3>I'm {this.props.name}</h3>
        <p>I stand at {this.props.height} cm tall</p>
        <p>I'm {this.props.age} smurf years old</p>
        <button class="delete" onClick={() => this.props.deleteSmurf(this.props.id)}>Smurf this Smurf!</button>
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


// const Smurf = props => {
//   return (
//     <div className="Smurf">
//       <h3>{props.name}</h3>
//       <strong>{props.height} tall</strong>
//       <p>{props.age} smurf years old</p>
//       <span className="delete-btn" onClick={() => props.deleteSmurf(props.id)}></span>
//     </div>
//   );
// };