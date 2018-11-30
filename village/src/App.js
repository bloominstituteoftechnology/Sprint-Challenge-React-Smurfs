import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink, withRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate = (prevProps, prevState) => {};

  addSmurf = data => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        this.setState({
          name: data.name,
          age: data.age,
          height: data.height
        });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  resetVillage = data => {
    this.setState({
      smurfs: data
    });
  };
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Village</NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              resetVillage={this.resetVillage}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
