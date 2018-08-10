import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import {Route, Link} from 'react-router-dom';
let url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

////_________ask why updateVillage(){}___or why this is even needed___ doesnt work///

  updateVillage = (newVillage) => {
    this.setState({
      smurfs: newVillage
    })
  }

  componentDidMount(){
    axios
    .get(url)
    .then(res => {
      this.setState({
        smurfs: res.data,
      })
    })
    .catch(err => console.log(err))
  }

  getSmurfData(id){
    return this.state.smurfs[id]
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/smurfs" render={ () => {
          return (
            <SmurfForm  updateVillage={this.updateVillage}/>
          )
        }
        } />
        <Route exact path="/smurfs" render={ () => {
          return (
            <Smurfs smurfs={this.state.smurfs} />
          )
        }
        } />


        <Route path="/smurfs/:id" render={(smurf) =>
          {
            console.log(this.state)
            console.log(smurf.match.params.id)
            console.log(this.getSmurfData(smurf.match.params.id))
            return (
              <div>
                <Link to='/smurfs'>
                  <h4>back</h4>
                </Link>

                <Smurf
//???-----------ask about how to know match and params are here ------i know they are there but is there a way to peek above?----------???/////
                   props={this.getSmurfData(smurf.match.params.id)}/>
              </div>
            )
          }
        } />
      </div>
    );
  }
}

export default App;
