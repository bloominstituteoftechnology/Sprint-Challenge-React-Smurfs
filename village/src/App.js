import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import UpdateSmurf from "./components/UpdateSmurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      id: 0,
      updateSmurf: false,
      updatedSmurf: {},
      updated: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    // get call to smurfs list
    axios
      .get("http://localhost:3333/smurfs")
      // display the data
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  }

  addSmurf = smurf => {
    // call post to access db
    axios
      .post("http://localhost:3333/smurfs", smurf)
      // get results back and set state to new list of smurfs
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };
  delete = id => {
    axios
      // target the current smurf to be deleted using its name
      .delete(`http://localhost:3333/smurfs/${id.target.name}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };
  edit = smurf => {
    // set the current smurfs id, make update form visible
    this.setState({ id: smurf.target.name, updateSmurf: true, updated: false });
  };
  update = smurf => {
    axios
      // update smurf by using the smurf objects id
      .put(`http://localhost:3333/smurfs/${smurf.id}`, {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      })
      // set state for new list of smurfs and let user know it has been updated, hide form
      .then(res =>
        this.setState({
          smurfs: res.data,
          updateSmurf: false,
          updated: true
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    // add condition for empty smurf array loading component

    return (
      <div className="App">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add A Smurf</NavLink>
        </ul>
        {this.state.updateSmurf ? (
          <UpdateSmurf
            {...this.state.smurfs[this.state.id]}
            update={this.update}
          />
        ) : null}
        {this.state.updated ? <p>Update Successful..</p> : null}
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Smurfs
                smurfs={this.state.smurfs}
                delete={this.delete}
                edit={this.edit}
              />
            );
          }}
        />
        <Route
          path="/smurf-form"
          exact
          render={() => {
            return <SmurfForm add={this.addSmurf} />;
          }}
        />
      </div>
    );
  }
}

export default App;
