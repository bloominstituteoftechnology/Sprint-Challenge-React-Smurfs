import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      const smurfs = res.data;
      this.setState({ smurfs: smurfs });
      console.log(this.state.smurfs);
    
    });
  }

  
  // deleteSmurf = (id) => {
  //   axios
      
  //     .delete(`http://localhost:3333/smurfs/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({smurfs:res.data})
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }



  render() {
    return (
      <div>
      <header>
        <nav>
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/smurfs"}>form</NavLink>
        </nav>
      </header>
      <div className="App">
         <Route exact path={"/"} render={(props)=> <Smurfs smurfs={this.state.smurfs}  />} />
         <Route path={"/smurfs"} render={(props)=> <SmurfForm {...props} />} />
      </div>
      </div>
    );
  }
}

export default App;
