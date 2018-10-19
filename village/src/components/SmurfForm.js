import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import { NavLink} from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    
    // defined a new body
    const newSmurfFriend = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    //posts new data to the specified url using .post
    axios     
    .post('http://localhost:3333/smurfs',  
    newSmurfFriend )

    //it then runs sets the state to the new data via the addNewSmurf function (defined in app.js)
    .then(response => {
      console.log('ADDING NEW SMURF', response);
      this.props.addNewSmurf(response.data)
      })

    .catch(error => {
      console.error('Error:', error);
    });

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    }

  


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form className = 'form' onSubmit={this.addSmurf}>
        <h1>Fill out form to add new Smurf !</h1>
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
          <button type="submit">Add to the village</button>

          {/* added a description and a link back to the home page so the user can see their new smurf  */}
          <p>Return to the <NavLink to ='/'>homepage </NavLink> to see updated list</p>
        </form>
      </div>
    );
  }
}

export default SmurfForm;