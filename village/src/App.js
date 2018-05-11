import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }
  
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    })
      .then(({ data }) => {
        this.setState({
          smurfs: [ ...data ],
          name: '',
          age: '',
          height: ''
        })
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  // componentDidMount
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => this.setState({ smurfs: [...data] }));
  }
  
  render() {
    return (
      <div className="App">
        <SmurfForm
          name={ this.state.name }
          age={ this.state.age }
          height={ this.state.height }
          addSmurf={ this.addSmurf }
          handleInputChange={ this.handleInputChange }
        />
        
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
