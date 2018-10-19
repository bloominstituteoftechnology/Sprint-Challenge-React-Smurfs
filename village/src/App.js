import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurf from './components/Smurf';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      url: 'http://localhost:3333',
      activeSmurf: {
        name: '',
        age: '',
        height: '',
        id: '',
      },
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    const { url } = this.state;
    axios.get(`${url}/smurfs`)
    .then(({data}) => {this.setState({smurfs: data.reverse()})})
    .catch(err => console.error(err));
  }

  updateSmurfs = (smurfs) => {
    this.setState({smurfs: smurfs.reverse()});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Route 
          exact
          path="/smurf-form" 
          render={props => 
            <SmurfForm 
              {...props} 
              url={this.state.url} 
              updateSmurfs={this.updateSmurfs}
            />
          }
        />

        <Route 
          exact 
          path="/" 
          render={props => 
            <Smurfs 
              {...props} 
              smurfs={this.state.smurfs} 
              url={this.state.url}
            />
          }
        />

        <Route
          path="/smurf/:id"
          render={props => {
            return (
              <Smurf
                {...props}
                smurf={this.state.smurfs[this.state.smurfs.findIndex(smurf => smurf.id.toString() === props.match.params.id)]}
                deleteSmurf={this.deleteSmurf}
                editSmurf={this.editSmurf}
                url={this.state.url}
                updateSmurfs={this.updateSmurfs}
              />
            )
          }
          }
        />

        <Route 
          exact
          path="/smurf/:id/edit"
          render={props => 
            <SmurfForm 
              {...props}
              url={this.state.url} 
              updateSmurfs={this.updateSmurfs}
              isEditing
              editId={props.match.params.id}
              smurf={this.state.smurfs[this.state.smurfs.findIndex(smurf => smurf.id.toString() === props.match.params.id)]}
            />
          }
        />
      </div>
    );
  }
}

export default App;
