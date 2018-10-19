import React from 'react';
import SmurfIcon from './SmurfIcon';
import SmurfForm from './SmurfForm';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   id: this.props.id,
    //   name: this.props.name,
    //   age: this.props.age,
    //   height: this.props.height,
    //   editing: false,
    // }
  }

  handleDelete = props => {
    this.props.deleteSmurf(this.props.smurf.id);
  }


  render(){
    return (
      <div className='smurf-container'>
      <div className="Smurf">
        <div className='buttons'>
          <div className='button delete' onClick={this.handleDelete}>
            Delete Smurf
          </div>

          <div className='button edit' onClick={event => {
            this.props.setUpForm(event, this.props.smurf);
            this.props.history.push('/smurf-form');
          }} >
            Edit Smurf
          </div>
        </div>
        <div className='icon'>
          <SmurfIcon />
        </div>
        <h3>{this.props.smurf.name}</h3>
        <strong>{this.props.smurf.height} tall</strong>
        <p>{this.props.smurf.age} smurf years old</p>
      </div>
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
