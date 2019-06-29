import React, { Component } from 'react';
import { Route, Link, NavLink } from "react-router-dom"
import axios from "axios"

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response.data)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => {
        console.log('Error:', err)
      })
  }

  updateSmurf = (smurfs) => {
		this.setState({ smurfs })
	}

  render() {
    const { smurfs } = this.state

    return (
      <div className="App">
        <nav>
					<div className="header-content">
						<Link to="/">Home</Link>
						<NavLink to="/smurf-from">New</NavLink>
					</div>
				</nav>

          <Route path='/' exact render={(props) => <Smurfs {...props} smurfs={smurfs} />} />
          <Route path='/smurf-from' exact render={(props) => <SmurfForm {...props} updateSmurf={this.updateSmurf} />} />

      </div>
    );
  }
}

export default App;
