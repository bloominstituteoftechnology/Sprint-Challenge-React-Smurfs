import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './components/SmurfPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      isEditing: false,
      editingID: null,
    };
  }

  componentDidMount() {
      axios.get('http://localhost:3333/smurfs')
            .then(res => this.setState({smurfs: res.data}))
            .catch(err => console.log(err));
  }

  updateState = newState => {
    this.setState(newState);
  }

  deleteASmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
          .then(res => this.setState({smurfs: res.data}))
          .catch(err => console.log(err));
  }

  getSmurf = id => {
    let smurf = this.state.smurfs.filter(smurf => smurf.id === id);
    return smurf[0];
  }

  render() {
    return (
      <div className="App">
        {this.state.isEditing ?
          <SmurfForm update={this.updateState} isEditing={true} editingID={this.state.editingID} trigger={this.state.triggerEditing} getSmurf={this.getSmurf} /> :
          <SmurfForm update={this.updateState} isEditing={false} />}
        <Route exact path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurfs/:id" render={props => <SmurfPage {...props} deleteASmurf={this.deleteASmurf} edit={this.updateState} getSmurf={this.getSmurf} />} />
      </div>
    );
  }
}

export default App;
