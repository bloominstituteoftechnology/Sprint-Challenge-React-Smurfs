import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: "",
        age: "",
        height: ""
      },
      editedSmurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    //gets inital data from server and set it on state so we can access/update it later
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err, "Smurfs not found"));
  }

  //write a changehandler function that can be passed down to the form component
  //this lets us control the form and keep state updated for when we addSmurf
  changeHandler = (key, value) => {
    this.setState({
      newSmurf: {
        ...this.state.newSmurf,
        [key]: value
      }
    });
  };

  editsChangeHandler = (key, value) => {
    this.setState({
      editedSmurf: {
        ...this.state.editedSmurf,
        [key]: value
      }
    });
  };

  addSmurf = event => {
    event.preventDefault();
    let smurf = this.state.newSmurf;
    if (smurf.name !== "" && smurf.age !== "" && smurf.height !== "") {
      //this setState to apply an id is only necessary if the server doesn't handle it for me
      // this.setState({
      //   newSmurf: {
      //     ...this.state.newSmurf,
      //     id: this.state.smurfs.length+1
      //   }
      // })
      axios
        .post("http://localhost:3333/smurfs", this.state.newSmurf)
        .then(res => {
          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          console.log(err, "You smurfed up, smurf addition unsuccessful");
        });

      this.setState({
        newSmurf: {
          name: "",
          age: "",
          height: ""
        }
      });
    } else {
      alert(
        "Fill out the whole smurfing form if you really smurfing want to add another smurfing smurf to the smurfing village. Smurf."
      );
    }
  };

  deleteSmurf = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err =>
        console.log(err, "You can't delete me! I'M IN-SMURFING-VINCIBLE!!!")
      );
  };

  //writing updateSmurf basic function now, will pass down once I figure out how I want it to be displayed to the user
  updateSmurf = (event, id) => {
    event.preventDefault();
    let smurf = this.state.editedSmurf;
    if (smurf.name !== "" && smurf.age !== "" && smurf.height !== "") {
      axios
        .put(`http://localhost:3333/smurfs/${id}`, this.state.editedSmurf)
        .then(res => {
          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          console.log(
            err,
            "This smurf is immutable and cannot be changed. Or you just smurfed up somehow."
          );
        });
      this.setState({
        editedSmurf: {
          name: "",
          age: "",
          height: ""
        }
      });
    } else {
      alert("Finish entering your smurfing edits, smurfbag");
    }
  };

  render() {
    if (!this.state.smurfs.length) {
      return <h1>Retrieving the smurfing data, hold on...</h1>;
    } else {
      return (
        <div className="App">
          <nav className="nav-header">
            <NavLink exact to="/" activeClassName="activePageLink">
              Smurf List
            </NavLink>
            <NavLink to="/smurf-form" activeClassName="activePageLink">
              Add New Smurf
            </NavLink>
          </nav>

          <Route
            path="/smurf-form"
            render={ownProps => (
              <SmurfForm
                {...ownProps}
                newSmurf={this.state.newSmurf}
                addSmurf={this.addSmurf}
                changeHandler={this.changeHandler}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={ownProps => (
              <Smurfs
                {...ownProps}
                smurfs={this.state.smurfs}
                deleteSmurf={this.deleteSmurf}
                editedSmurf={this.state.editedSmurf}
                updateSmurf={this.updateSmurf}
                editsChangeHandler={this.editsChangeHandler}
              />
            )}
          />
        </div>
      );
    }
  }
}

export default App;
