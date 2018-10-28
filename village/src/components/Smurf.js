import React, { Component } from 'react';
import SmurfStyle from './SmurfStyle';
import {Link} from 'react-router-dom';

class Smurf extends Component {
   constructor(props) {
     super(props);
     this.state = {
        newSmurf: {
            name: this.props.smurf.name,
            age: this.props.smurf.age,
            height:this.props.smurf.email,
            id: this.props.smurf.id
        }
      } 
    }

inputChange = (event) => {
     event.preventDefault();
     const name = event.target.name;
     this.setState({
        newSmurf: { ...this.state.newSmurf, [name]: event.target.value
         }
     });
  }  

updateSmurf = (event) => {
  event.preventDefault();
    if(event.target.classList.contains("editButton")) {
        if(event.target.parentNode.previousElementSibling.style.display === '') {
                event.target.parentNode.previousElementSibling.style.display = "block"; 
                if(event.target.innerHTML === 'Edit') {
                    event.target.innerHTML = 'Save';
                  }  
        } else {
               event.target.parentNode.previousElementSibling.style.display = '';
                if(event.target.innerHTML === 'Save') {
                    event.target.innerHTML = 'Edit';
                    this.props.updateSmurfHandler(this.state.newSmurf);
                  }  
        }
    }  
}  

delSmurf = () => {
      this.props.deleteSmurf(this.state.newSmurf.id);
   }

render() { 
    let smurf = this.props.smurf;
  return (
    <div className="Smurf">
      <SmurfStyle>
      <Link to={`/smurfs/${smurf.id}`}> 
      <h3>{smurf.name}</h3>{" "}</Link>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <form  className="update-form">
        <input type='text' name="name" className="update-input" value={this.state.newSmurf.name} onChange={this.inputChange} /> 
        <input type='text'  name="age" className= "update-input" value={this.state.newSmurf.age}  onChange={this.inputChange} /> 
        <input  type="text" name="height" className="update-input" value={this.state.newSmurf.height} onChange={this.inputChange} /> 
      </form>
      <div className="ButtonContainer">
        <span className="delButton" onClick={this.delSmurf}>Delete</span>
        <span className="editButton" onClick={this.updateSmurf}>Edit</span>
      </div>
      </SmurfStyle>
    </div>
   );
  }
}

// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };

export default Smurf;
