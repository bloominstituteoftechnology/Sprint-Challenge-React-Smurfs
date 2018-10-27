import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';
import DetailSmurf from './components/DetailSmurf';
import EditSmurfForm from './components/EditSmurfForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      currentSmurf: []
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  getAPI = () => {
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        console.log(res.status);
        this.setState({
          smurfs: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectSmurf = (smurf) => {
    this.setState({
      currentSmurf: smurf
    });

    this.props.history.push('/smurf');
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Nav} />
        <Route exact path='/' render={props => <Smurfs smurfs={this.state.smurfs} selectSmurf={this.selectSmurf} {...props} />} />
        <Route path='/smurf-form' render={props => <SmurfForm getAPI={this.getAPI} {...props}  />}/>
        <Route path='/smurf' render={props => <DetailSmurf smurf={this.state.currentSmurf} getAPI={this.getAPI} {...props} />} />
        <Route path='/editsmurf' render={props => <EditSmurfForm smurf={this.state.currentSmurf} getAPI={this.getAPI} {...props} />} />
      </div>
    );
  }
}

export default withRouter(App);
