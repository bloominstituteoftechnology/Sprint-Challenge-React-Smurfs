import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation/Navigation';
import SmurfPage from './components/SmurfPage';
import Smurf from './components/Smurf';

const blankSmurfs = {
  name: '',
  age: '',
  height: '',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: '',
      },
      isUpdating: false,
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  // Fetch the data for smurfs list
  fetchData() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data})
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  // Adds a new smurf
  addNewSmurf = (e, smurf) => {
    e.preventDefault();
    this.setState({smurf}, () => {axios.post('http://localhost:3333/smurfs', this.state.smurf)
    .then(response => this.setState({ smurfs :response.data, smurf}, () => this.props.history.push('/')))
    .catch(error => console.log(error));});
  }

  // Deletes a smurf
  deleteSmurf = smurfId => {
    return axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(response => this.setState({ smurfs: response.data}))
      .catch(error => { console.error('Server Error', error)});
  }

  // Go to the form to edit the smurf
  goToSmurfForm = (e, id) => {
    e.preventDefault();
    const smurfUpdate = this.state.smurfs.find(smurf => smurf.id === id);
    this.setState({isUpdating: true, smurf: smurfUpdate }, () => this.props.history.push('/smurf-form'))
  }

  updateSmurf = smurfId => {
    axios.put(`http://localhost:3333/smurfs/${smurfId}`, this.state.smurf)
      .then(response => {
        this.setState({
          smurfs: response.data,
          isUpdating: false,
          smurf: blankSmurfs,
        });
        this.props.history.push('/');
      })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Navigation />
        <Route exact path="/" render={ props =>
          <Smurfs {...props}
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf}
            goToSmurfForm={this.goToSmurfForm}
          />
        } />
        <Route exact path="/smurf-form" render={ props =>
          <SmurfForm {...props}
          smurf={this.state.smurf}
          addNewSmurf={this.addNewSmurf}
          updateSmurf={this.updateSmurf}
          isUpdating={this.state.isUpdating}
          /> 
        } />
        <Route path="/smurfs/:id" render={ props =>
          <SmurfPage {...props}
            smurf={this.state.smurfs}
            deleteSmurf={this.deleteSmurf}
            goToSmurfForm={this.goToSmurfForm}
          />  
        } />
      </div>
    );
  }
}

export default withRouter(App);
