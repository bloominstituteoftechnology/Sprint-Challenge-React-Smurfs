import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
const DeleteButton = styled.button `
background-color: red;
width: 100px;
height: 20px;
color: white;
border: 1px solid #262626;
outline: none;
cursor: pointer;
`


class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: ''
    }
  }

deleteSmurf = e => {
  e.preventDefault();
  let id = e.target.id;
  console.log(e.target.id);
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => {
    console.log(response.data);
    this.props.getData();
  })
  
}
editSmurf = e => {
  e.preventDefault();
  let id = this.state.id;
  console.log(this.state.id);
  axios.put(`http://localhost:3333/smurfs/${id}`, {
    name: this.state.name,
    age: this.props.age,
    height: this.props.height
  })
    .then(response => {
      console.log(response.data);
      this.props.getData();
  
      this.setState({name: ''})
    })

}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <form onSubmit={this.editSmurf}>
     <input type="text" name ='name' value={this.state.name} onChange={this.handleInputChange} placeholder=' Edit Smurf Name'/>
     < button > Edit Smurf </button><DeleteButton {...this.props} onClick={this.deleteSmurf}>Delete Smurf</DeleteButton >
     </form>
     <br/>
     <br/>
    </div>
  );
};


}
export default Smurf;

