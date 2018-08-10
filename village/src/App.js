import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const Header = () => {
  return(
    <div>
      <h1>Welcome to the Smurfs Village, guest. You're very welcomed here!</h1>
      <Link to="/smurfs">Check out the Smurfs Village!</Link>
    </div>
  )
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
        .then(response => this.setState({smurfs: response.data}))
        .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/smurfs" render={(props) => 
            <div>
              <Smurfs {...props} smurfs={this.state.smurfs} /> 
              <SmurfForm /> 
            </div>
          }/>
      </div>
    );
  }
}

export default App;
