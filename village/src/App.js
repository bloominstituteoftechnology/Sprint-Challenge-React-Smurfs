import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
// import IndividualSmurf from './components/IndividualSmurf';
import {Route, Link} from 'react-router-dom';
let url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfArray: []
    };
  }

  ////_________ask why updateVillage(){}___or why this is even needed___ doesnt work/// -- redux basically but ../setstate would be cool.

  updateVillage = (newVillage) => {
    this.setState({smurfArray: newVillage})
  }

  componentDidMount() {
    axios.get(url).then(res => {
      this.setState({smurfArray: res.data})
    }).catch(err => console.log(err))
  }

  getSmurfData = (id) => {
    console.log(id);
    console.log(this.state.smurfArray)
    return this.state.smurfArray.find(smurf => {
      return smurf.id == id
    })
    // return this.state.smurfArray.filter(smurf => {
    //   return smurf.id == id
    // })[0] //because it return an array -- this is why find is better.
  }

  ///_____________ask about .find vs .filter_____________// --find is first --filter is an array of things that match

  deleteSmurf(event, id) {
    event.preventDefault();
    console.log(event, id)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      // window.location="http://localhost:3000/smurfs/";
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

      <Route path="/smurfs/:idYO" render={(smurf) => {
        //path is kinda constaly listening for the url to match, then it renders below stuff.
        console.log(smurf)
          let smurfID = smurf.match.params.idYO;
          ///line 74 is linked to line 73 via mathc.params only . the ':' declares what goes into params.
          console.log(smurfID)
          return (<div>
            <Link to='/smurfs'>
              <h4>back</h4>
            </Link>

              <form onSubmit={(event) => {
                this.deleteSmurf(event, smurfID)
                smurf.history.push('/smurfs');
              }} >
                <button>delete</button>


              </form>

            <Smurf
              //???-----------ask about how to know match and params are here ------i know they are there but is there a way to peek above?----------???/////
              props={this.getSmurfData(smurfID)}/>
          </div>)
        }}/>
    </div>);
  }
}

export default App;
