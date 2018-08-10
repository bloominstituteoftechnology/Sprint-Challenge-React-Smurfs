import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import IndividualSmurf from './components/IndividualSmurf';
import {Route, Link} from 'react-router-dom';
let url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfArray: []
    };
  }

  ////_________ask why updateVillage(){}___or why this is even needed___ doesnt work///

  updateVillage = (newVillage) => {
    this.setState({smurfArray: newVillage})
  }

  componentDidMount() {
    axios.get(url).then(res => {
      this.setState({smurfArray: res.data})
    }).catch(err => console.log(err))
  }

  getSmurfData(id) {
    return this.state.smurfArray.find(smurf => {
      smurf.id == id
    })
  }

  ///_____________ask about .find vs .filter_____________//

  deleteSmurf(event, id) {
    event.preventDefault();
    console.log(event, id)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      window.location = "http://localhost:3000/smurfs/";
      axios.get(url)
      .then(res => {

        console.log(res)
        this.updateVillage(res.data)

      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }

  render() {
    return (<div className="App">
      <Route exact path="/smurfs" render={() => {
          return (<SmurfForm updateVillage={this.updateVillage}/>)
        }
}/>
      <Route exact path="/smurfs" render={() => {
          return (<Smurfs smurfs={this.state.smurfArray}/>)
        }
}/>

      <Route path="/smurfs/:id" render={(smurf) => {
          let smurfID = smurf.match.params.id;
          console.log(smurfID)
          return (<div>
            <Link to='/smurfs'>
              <h4>back</h4>
            </Link>

              <form onSubmit={(event) => {
                this.deleteSmurf(event, smurfID)
              }} >
                <button>delete</button>

              </form>

            <IndividualSmurf
              //???-----------ask about how to know match and params are here ------i know they are there but is there a way to peek above?----------???/////
              data={this.getSmurfData(smurfID)}/>
          </div>)
        }}/>
    </div>);
  }
}

export default App;
