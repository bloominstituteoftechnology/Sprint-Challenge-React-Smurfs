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
  
  // handeInputChange
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // addSmurf
  addSmurf = event => {
    event.preventDefault();

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
      .catch(err => alert(`${ err }\nAll inputs need a value`));
  };

  // deleteSmurf
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${ id }`)
      .then(({ data }) => {
        this.setState({ smurfs: [ ...data ] });
      })
      .catch(err => alert(`${ err }\nWhat the smurf is going on?!`));
  };

  // saveEditSmurf
  saveEditSmurf = (id, name, age, height) => {
    axios.put(`http://localhost:3333/smurfs/${ id }`, {
      name,
      age,
      height
    })
      .then((res) => {
        console.log(res)
        this.setState({ smurfs: [ ...res.data ] })
      })
      .catch(err => console.log(`${ err }\nSomething went wrong with the smurfing edit!`));
  }
  
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
        
        <Smurfs
          smurfs={this.state.smurfs}
          deleteSmurf={ this.deleteSmurf }
          saveEditSmurf={ this.saveEditSmurf }
        />
      </div>
    );
  }
}

export default App;
