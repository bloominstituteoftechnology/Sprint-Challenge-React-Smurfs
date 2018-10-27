import React, { Component } from 'react';
import axios from 'axios';
import './SmartForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };

    this.addSmurf = this.addSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(ev) {
    ev.preventDefault();
    const newSmurf = this.state;
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then(response => {
      this.props.updateSmurfs();
      console.log(response)
    })
    .catch(error => console.log(`Duplicate Smurf! Use Update ${error}`))

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurf(ev) {
    ev.preventDefault();
    const newSmurf = this.state;
    console.log(newSmurf);
    axios.put(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        this.props.updateSmurfs();
      })
      .catch(error => console.log(error.response))

      this.setState({
        name: '',
        age: '',
        height: ''
      });
  }

  updateName(ev) {
    this.setState({
      name: ev.target.value
    });
  }

  updateAge(ev) {
    this.setState({
      age: ev.target.value
    });
  }

  updateHeight(ev) {
    this.setState({
      height: ev.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form>
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
          <button onClick={this.addSmurf} type="submit">Add to Village</button>
          <button onClick={this.updateSmurf} type="submit">Update Village</button>
        </form>
      </div>
    );
  }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // render() {
  //   return (
  //     <div className="SmurfForm">
  //       <form onSubmit={this.addSmurf}>
  //         <input
  //           onChange={this.handleInputChange}
  //           placeholder="name"
  //           value={this.state.name}
  //           name="name"
  //         />
  //         <input
  //           onChange={this.handleInputChange}
  //           placeholder="age"
  //           value={this.state.age}
  //           name="age"
  //         />
  //         <input
  //           onChange={this.handleInputChange}
  //           placeholder="height"
  //           value={this.state.height}
  //           name="height"
  //         />
  //         <button type="submit">Add to the village</button>
  //       </form>
  //     </div>
  //   );
  // }
}

export default SmurfForm;
