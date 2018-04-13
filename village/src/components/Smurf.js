import React, { Component } from 'react';
import axios from 'axios';



class Smurf extends Component {
constructor(props){
super(props)
this.state={
  name:'',
  age:'',
  height:'',
}

}
updateSmurf = smurfId => {
  const smurf = {};
  if (this.state.name !== '') {
    smurf.name = this.state.name;
  }
   if (this.state.age !== '') {
    smurf.age = this.state.age;
  }  if (this.state.height !== '') {
    smurf.height = this.state.height;
  }
  axios
    .put(`http://localhost:3333/smurfs/${smurfId}`, smurf)
    .then(response => {
      this.setState({name: '', age: '', height:''});
      this.props.updateGet();
    })
    .catch(err => {
      console.log(err);
    });
};
setInput = (element)=>{
  this.setState({[element.target.name]: element.target.value})
 }
  render(){
    console.log(this.props);
  return (
    <React.Fragment>
    <div className="Smurf">
      <h3>{this.props.name}name</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>

    </div>
    <div class="form-style">
    <input class="input-style" 
        type="text" 
        onChange={this.setInput}
        placeholder="enter name"
        name="name"
        value={this.state.name}
    />
    <input class="inputTwo-style" 
        type="text" 
        onChange={this.setInput}
        name="height"
        placeholder="enter height"
        value={this.state.height}
    />

    <input class="inputThree-style"
        type="text"
        onChange={this.setInput}
        name="age"
        placeholder="enter age"
        value={this.state.age}
        />
    </div>
    <div>
    <button onClick={() => this.updateSmurf(this.props.id)}>update this mang</button>
    <button onClick={() => this.props.deleteSmurf(this.props.id)}>Delete this mang</button>
    </div>
    </React.Fragment>
  );
}
};

export default Smurf;
