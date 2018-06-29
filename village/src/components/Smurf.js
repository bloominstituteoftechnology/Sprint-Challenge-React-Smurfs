import React, {Component} from 'react';
import axios from 'axios';

const URL = 'http://localhost:3333/smurfs';


class Smurf extends Component {
  constructor(props){
    super(props);
    this.state={
      smurf: [],
      updateSmurf: [],
      update: true
    }
  }
  componentDidMount(){
    this.setState({
      smurf:  this.props.smurf,
      updateSmurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }
  handleInput= (e) => {
    this.setState({
      updateSmurf: {
        [e.target.name]: e.target.value
      }
    });
  }
  updateSmurf = e =>{
    let newUrl = URL+ '/' +this.state.smurf.id;
    let editSmurf = {
      name: this.state.updateSmurf.name,
      age: this.state.updateSmurf.age,
      height: this.state.updateSmurf.height
    }
    axios
      .put(newUrl, editSmurf)
      .then(response => this.setState({smurf: response.data, update: !this.state.update}))
      .catch(error => console.log(error));
  }
  showInput = () =>{
    this.setState({
      update: !this.state.update
    })
  }
  render(){
    const update = 
    <form onSubmit={this.updateSmurf}>
      <input type="text" name="name" placeholder={this.state.smurf.name} value={this.state.updateSmurf.name} onChange={this.handleInput}/>
      <input type="text" name="age" placeholder={this.state.smurf.age} value={this.state.updateSmurf.age} onChange={this.handleInput}/>
      <input type="text" name="height" placeholder={this.state.smurf.height} value={this.state.updateSmurf.height} onChange={this.handleInput}/>
      <input type="submit" value="Save"/>
    </form>;
    return (
      this.state.update ? 
        <div className="Smurf" onClick={this.showInput}>
          <h3>{this.state.smurf.name}</h3>
          <strong>{this.state.smurf.height} tall</strong>
          <p>{this.state.smurf.age} smurf years old</p>
        </div>
        : update
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

