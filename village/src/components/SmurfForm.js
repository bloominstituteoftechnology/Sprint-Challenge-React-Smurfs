import React, { Component } from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

      smurf : {
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf(event, this.state.smurf);

    this.setState({
      smurf : {
      name: '',
      age: '',
      height: ''
      }
    });
  }

  handleInputChange = event => {
    event.persist();
      this.setState(prevState => {
        return {
          smurf: {
            ...prevState.smurf,
            [event.target.name]: event.target.value 
          }
        }
      })
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <h1>Don't forget to add YOUR favorite SMURF HERE!!!</h1>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            type = "text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type = "number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            type = "text"
          />
          <button type="submit">Add to the village</button>
          <button> <Link to = "/"> Go to the Village  </Link></button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
