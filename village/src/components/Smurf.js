import React, {Component} from 'react';
import axios from 'axios';
class Smurf extends Component {
  constructor(props){
    super(props);
    this.state={
      showForm: false,
      name: '',
      age: '',
      height: '',
    };
  }
  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(() => {
      this.props.updateSmurfs();
    }).catch(err => {
      console.log(err);
    })
  }
  showForm = (e) => {
    const {showForm} = this.state;
    this.setState({showForm: !showForm});
  }
  updateValues = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitUpdate = (id) => {
    let update = {};
    if (this.state.name !== '') {
      update.name = this.state.name;
    }
    if (this.state.age !== '') {
      update.age = this.state.age;
    }
    if (this.state.height !== '') {
      update.height = this.state.height;
    }
    axios.put(`http://localhost:3333/smurfs/${id}`, update)
    .then( () => {
      this.props.updateSmurfs();
      this.setState({showForm: false, name: '', age: '', height: ''})
    }).catch(err => {
      console.log(err);
    })
  }
  render(){
    let form = null;
    if (this.state.showForm === true) {
      form = (
        <form>
          <input
            name='name'
            value={this.state.name}
            onChange={this.updateValues}
            placeholder='enter name'
          />
          <input
            name='age'
            value={this.state.age}
            onChange={this.updateValues}
            placeholder='age'
          />
          <input
            name='height'
            value={this.state.height}
            onChange={this.updateValues}
            placeholder='height'
          />
          <button type='button' onClick={() => this.submitUpdate(this.props.id)}>Submit Update</button>
        </form>
      );
    }
    return (
      <div className="Smurf">
        <h3>{this.props.name}</h3>
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>
        <button onClick={() => this.deleteSmurf(this.props.id)}>Delete</button>
        <button onClick={this.showForm}>Update</button>
        {form}
      </div>
    );
  }
};

export default Smurf;
