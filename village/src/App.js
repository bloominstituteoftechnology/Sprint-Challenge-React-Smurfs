import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err, "this error");
      });
  }

  // deleteSmurf = id => {
  //   axios
  //     .delete(`http://localhost:3333/smurfs/${id}`)
  //     .then(res => {
  //       this.setState({ smurfs: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // gotToUpdate = (e, id) => {
  //   e.preventDefault();
  //   const updatedSmurf = this.state.smurfs.find(smurf => smurf.id == id);
  //   this.setState({isUpdating: true, smurf: updatedSmurf});
  // }

  // updatedSmurf = smurfId => {
  //   axios
  //     .put(`http://localhost:3333/smurfs/${smurfId}`, this.state.)
  // }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Smurfs
            </NavLink>
          </li>
          <li>
            <NavLink to="/smurf-form" activeClassName="activeNavButton">
              Add a New Smurf
            </NavLink>
          </li>
        </ul>

        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurfs/:smurfId"
          render={props => <Smurf {...props} smurfs={this.state.smurfs}  />}  //deleteSmurf={this.deleteSmurf}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs}  />}
        />
      </div>
    );
  }
}

export default App;
