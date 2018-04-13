import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: "",
      height: "",
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data})
      console.log(response);
    })
    .catch(error => {
      console.log(`Error fetching Smurfs: ${error}`);
  });
};

handleInputChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};

  addSmurf = event => {
    
    const smurfAdd = { name: this.state.name, 
                       age: this.state.age, 
                       height: this.state.height 
                      };
    axios
      .post(`http://localhost:3333/smurfs`, smurfAdd)
      .then(response => {
        this.getSmurfs();
    })
    .catch(err => {
      console.log(err);
    });
  this.setState({ name: "", age: "", height: ""});
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
          <button type="submit" onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
