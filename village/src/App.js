import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smirfone from './components/Smirfone';
import Smirftwo from './components/Smirftwo';
import { NavLink } from 'react-router-dom';
import Intro from './components/Intro';
import './App.css';
// import { router } from 'sw-toolbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  updateSmurfs = newSmurf => {
    this.setState({ smurfs: newSmurf });
  };

  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <nav>
          <NavLink to="/" className='home'>Home</NavLink>{' '}
          <NavLink to="/smurf-form" className='addsmurf'>Add a Smurf</NavLink>
        </nav>
        <div className="smurfbg">
          <Smirfone />
          <div>
            <Route exact path="/" component={Intro} />

            <Route
              // exact
              path="/smurf-form"
              render={props => (
                <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
              )}
            />

            <Route
              // exact
              path="/smurf-form"
              render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
            />
          </div>
          <Smirftwo />
        </div>
      </div>
    );
  }
}

export default App;
