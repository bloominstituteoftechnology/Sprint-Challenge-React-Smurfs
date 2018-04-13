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
handleTextInput = element => {
  this.setState({ [element.target.name]: element.target.value });
};
deleteSmurf = smurfId =>{
  axios
  .delete(`http://localhost:3333/smurfs${smurfId}`)
  .then(response =>{
      this.props.updateGet();
  })
  .catch(err =>{
      console.log(err);
  });
};

  render(){
    console.log(this.props7);
  return (
    <React.Fragment>
    <div className="Smurf">
      <h3>{this.props.name}name</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
    </div>
    <button onClick={() => this.deleteSmurf(this.props.id)}>Delete this mang</button>
    </React.Fragment>
  );
}
};

export default Smurf;
