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
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
        this.setState({ smurfs: response.data });
    })
    .catch(error => {
        console.log('Oh no! You hit an error');
    });
}


  render() {
    return (
      <div className="App">
        <Smurfs/>
        <SmurfForm />
        
      </div>
    );
  }

  refresh() {
      this.setState({
        refresh: !this.state.refresh,
      });
    }	
}

export default App;
