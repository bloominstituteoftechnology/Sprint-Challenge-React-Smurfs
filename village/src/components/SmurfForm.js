import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     age: '',
  //     height: ''
  //   };
  //   this.addSmurf = this.addSmurf.bind(this);
  //   // this.removeSmurf = this.removeSmurf.bind(this);
  //   this.updateName = this.updateName.bind(this);
  //   this.updateAge = this.updateAge.bind(this);
  //   this.updateHeight = this.updateHeight.bind(this);
  // }
state = {
  name: '',
  age: '',
  height: ''
}
  // given functions: add/update (Create/Update)
  // missing functions: Read/Delete

  

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
  /* ADD(CREATE) FUNCTION */
  addSmurf(event) {  // equivalent to submitHandler in FriendForm.js
    event.preventDefault();
    // add code to create the smurf using the api
    
  
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .then(response => {
        console.log('response from post', response);
        this.setState({
          key: '',
          name: '',
          age: '',
          height: ''
        });
        this.props.onCreate();
      })
      .catch(error => {
        console.error('error saving the data');
      });

  }

  /* UPDATE FUNCTIONS*/
  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

/* DELETE FUNCTION */
deleteSmurf(event) {
  this.setState({
    // age: event.target.value
    //?? method to delete entire object
  });
}
}

export default SmurfForm;