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

  addSmurf = (e, obj) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", obj)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log("success delete");
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // gotToUpdate = (e, id) => {
  //   e.preventDefault();
  //   const updatedSmurf = this.state.smurfs.find(smurf => smurf.id == id);
  //   this.setState({isUpdating: true, smurf: updatedSmurf});
  // }

  updateSmurf = id => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  render() {
    if (this.state.smurfs.length === 0) {
      return <div>Loading...</div>;
    }
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
          render={() => (
            <SmurfForm smurfs={this.state.smurfs} addSmurf={this.addSmurf} updateSmurf={this.updateSmurf} />
          )}
        />
        <Route
          path="/smurfs/:id"
          render={() => (
            <Smurf smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )} 
        />
        <Route
          exact
          path="/"
          render={() => (
          <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />
        </div>
     
    );
  }
}

export default App;
