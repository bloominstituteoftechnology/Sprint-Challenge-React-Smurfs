import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  postData(newObj) {
    axios
    .post(`http://localhost:3333/smurfs`, newObj)
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteData(id) {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      this.getData();
    })
    .catch(err => {
      console.log(err);
    });
  }

  updateData(newObj, id) {
    axios
    .put(`http://localhost:3333/smurfs/${id}`, newObj)
    .then(response => {
      this.getData();
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <SmurfForm submit={this.postData.bind(this)} />
        <Smurfs delete={this.deleteData.bind(this)} update={this.updateData.bind(this)} {...this.state} />
      </div>
    );
  }
}

export default App;
