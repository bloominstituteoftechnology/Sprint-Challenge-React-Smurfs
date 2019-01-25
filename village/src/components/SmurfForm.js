import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Smurf from './Smurf';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount(prevProps){
    
    let editSmurf = this.props.editSmurf
    
    if(editSmurf.name){
      this.setState({
        name: editSmurf.name,
        age: editSmurf.age,
        height: editSmurf.height
      })
    }
  }

  addSmurf = event => {
    event.preventDefault();
    if(!this.props.editSmurf.name){
      this.props.addToList(this.state);
    }else{
      this.props.updateToList(this.props.editSmurf.id, this.state);
    }
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/')
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.props.editSmurf.name ? 
            'Edit Smurf' 
            : 
            'Add Smurf'}</button>
        </form>
          {this.props.editSmurf.name &&<Route
          path="/smurf-form/:id"
          render={(props) => 
           <Smurf
            edit
            smurf={this.props.editSmurf}
            key={this.props.editSmurf.id}
           
          />}
          /> 
          }
        
      </div>
    );
  }
}

export default SmurfForm;
