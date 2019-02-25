import React from 'react';
import axios from 'axios';

export default class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
      name: '',
      age: 0,
      height: ''
    };
  }

  handleInputChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value });
    console.log("hIC log:", event.target.value)
  }




  addSmurf = event => {
    // event.preventDefault();
    // add code to create the smurf using the api
    // const URL = 'http://localhost:3333/smurfs';
    

    const smurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    }
    console.log(smurf);
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => { console.log("post", response.data)
        this.setState({
          smurfs: response.data
        });
        
      }).catch(error => console.log(error))
  };





  

  render(props) {
    return (
      <div className="SmurfForm">

      {/*this.state.smurfs.map(each => (
        <Smurfs each={each} deleter={this.deleter} />
      ))*/}

        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            type="number"
            placeholder="age"
            
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            type="number"
            placeholder="height"
            
            name="height"
          />
          
          <button type="submit">Add to the village</button>
          
        </form>
      </div>
    )
  }
}
