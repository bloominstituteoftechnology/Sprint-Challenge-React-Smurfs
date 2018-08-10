import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Destroyed from './components/Destroyed';
import EditSmurf from './components/EditSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  gargamelFury = () => {
    let smurfs = this.state.smurfs;
    for(let smurf of smurfs){
      axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
          console.log('deleted ', res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  mySmurfs = props => {
    return (
      <div className='home'>
        <SmurfForm gargamel={this.gargamelFury} {...props} />
        <Smurfs smurfs={this.state.smurfs} getSmurfs={this.getSmurfs()} {...props}/>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={this.mySmurfs} />
        <Route path='/destroy' component={Destroyed} />
        <Route path='/edit/:id' component={EditSmurf} />
      </div>
    );
  }
}

export default App;
