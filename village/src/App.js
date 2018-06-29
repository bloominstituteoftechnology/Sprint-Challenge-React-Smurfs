import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './components/SmurfPage';

const API_URL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  onAddSmurf = smurf => {
    axios
    .post(API_URL, smurf)
    .then(response => {
      console.log('posted', response);
      this.setState({ smurfs: response.data});
    })
    .catch(error => console.log(error));    
  }

  onDeleteSmurf = id => {
    axios
    .delete(`${API_URL}/${id}`)
    .then(response => {
      console.log('posted', response);
      this.setState({ smurfs: response.data});
    })
    .catch(error => console.log(error));
  }

  onUpdateSmurf = (id, smurf) => {
    axios
    .put(`${API_URL}/${id}`, smurf)
    .then(response => {
      console.log('posted', response);
      this.setState({ smurfs: response.data});
      window.location.href = '/smurfs';
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response => {
      this.setState({smurfs: response.data});
      console.log(this.state.smurfs);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(props) => <Header {...props} />} />
        <Route exact path="/smurfs" render={(props) => <SmurfForm {...props} onSubmitSmurf={this.onAddSmurf} smurfs={this.state.smurfs} />} />
        <Route exact path="/smurfs" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} onDeleteSmurf={this.onDeleteSmurf} />} />
        <Route path="/update/:smurfID" render={(props) => <SmurfForm {...props} onSubmitSmurf={this.onUpdateSmurf} smurfs={this.state.smurfs} />} />
        <Route path="/smurf/:smurfID" render={(props) => <SmurfPage {...props} smurfs={this.state.smurfs} onDeleteSmurf={this.onDeleteSmurf} />} />
      </div>
    );
  }
}

export default App;
