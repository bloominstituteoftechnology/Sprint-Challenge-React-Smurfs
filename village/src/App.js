import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './pages/SmurfPage';
import Smurf from './components/Smurf';
class App extends Component {
  constructor(props) {
    super(props);
    let match = props.match; //← here
    this.state = {
      smurfs: []
      // id: match.params.id
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }));
  }

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/addSmurf">Add Smurf</Link>
        <Route path="/addSmurf" component={SmurfForm} />
        <Route
          path="/"
          component={() => <Smurfs smurfs={this.state.smurfs} />}
          exact
        />
        <Route
          path="/smurf/:id"
          component={SmurfPage}
          smurfs={this.state.smurfs}
        />
      </div>
    );
  }
}

export default App;
