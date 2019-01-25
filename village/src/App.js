import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Smurfs from "./components/Smurfs";
import NavbarContainer from "./components/NavbarContainer";
import SingleSmurf from "./components/SingleSmurf";
import { isEmpty } from "./components/isEmpty";
import { Alert } from "reactstrap";
import SmurfForm from "./components/SmurfForm";

//const URL = "http://localhost:3333";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      isOpen: false,
      name: "",
      age: "",
      height: "",
      isUpdating: false,
      message: "",
      updateId: "",
      err: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  submitConditional = e => {
    e.preventDefault();

    if (this.state.isUpdating) {
      this.saveSmurf();
    } else {
      this.addSmurf();
    }
  };
  addSmurf = () => {
    const { name, age, height } = this.state;
    if (isEmpty(name) || isEmpty(age) || isEmpty(height)) {
      this.setState({ err: " All fields Required" });
      return;
    }
    if (isNaN(age)) {
      this.setState((state, props) => {
        return {
          err: (state.err = "Age  field needs to be a number")
        };
      });
      return;
    }
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      isUpdating: false
    };
    axios
      .post(`/smurfs`, newSmurf)
      .then(res =>
        this.setState({
          smurfs: res.data,
          message: "successfully added",
          err: ""
        })
      )
      .then(() => this.props.history.push("/"))
      .catch(err => this.setState({ err }));

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  fetchData = () => {
    axios(`/smurfs`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => this.setState({ err }));
  };
  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  deleteSmurf = id => {
    axios
      .delete(`/smurfs/${id}`)
      .then(res =>
        this.setState({ smurfs: res.data, message: "Successfully deleted" })
      )
      .then(() => this.props.history.push("/"))
      .catch(err => this.setState({ err }));
  };
  updateSmurf = smurf => {
    this.props.history.push("/form"),
      this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        isUpdating: true,
        updateId: smurf.id,
        message: `currently updating ${smurf.name}`
      });
  };
  saveSmurf = () => {
    const { age, name, height } = this.state;
    if (isEmpty(name) || isEmpty(age) || isEmpty(height)) {
      this.setState({ err: " All fields Required" });
      return;
    }
    if (isNaN(age)) {
      this.setState((state, props) => {
        return {
          err: (state.err = "Age  field needs to be a number")
        };
      });
      return;
    }
    const updatedValue = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log(this.state.updateId);
    axios
      .put(`/smurfs/${this.state.updateId}`, updatedValue)
      .then(res =>
        this.setState({
          smurfs: res.data,
          isUpdating: false,
          message: "smurff updated",
          err: "",
          name: "",
          age: "",
          height: ""
        })
      )
      .then(() => this.props.history.push(`/`))
      .catch(err => this.setState({ err }));
  };
  resetForm = id => {
    if (
      this.props.match.path === "/" ||
      this.props.match.path === `/smurf/${id}`
    ) {
      this.setState({
        isUpdating: false,
        message: "",
        name: "",
        age: "",
        height: "",
        err: ""
      });
    }
  };
  render() {
    const {
      isOpen,
      name,
      age,
      height,
      isUpdating,
      message,
      smurfs,
      err
    } = this.state;
    return (
      <div className="App">
        <NavbarContainer
          toggle={this.toggle}
          resetForm={this.resetForm}
          isOpen={isOpen}
        />
        {message && (
          <h3>
            <Alert color="success">{message}</Alert>
          </h3>
        )}
        {err && (
          <h3>
            <Alert color="danger">{err}</Alert>
          </h3>
        )}
        <Route
          path="/form"
          render={props => (
            <SmurfForm
              name={name}
              age={age}
              height={height}
              {...props}
              handleInputChange={this.handleInputChange}
              submitConditional={e => this.submitConditional(e)}
              isUpdating={isUpdating}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={props => (
            <Smurfs
              resetForm={this.resetForm}
              smurfs={this.state.smurfs}
              {...props}
            />
          )}
        />
        {!smurfs.length && (
          <img
            src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
            alt="loading spinner"
          />
        )}
        <Route
          path="/smurf/:id"
          render={props => (
            <SingleSmurf
              name={name}
              age={age}
              height={height}
              handleInputChange={this.handleInputChange}
              submitConditional={e => this.submitConditional(e)}
              isUpdating={isUpdating}
              updateSmurf={this.updateSmurf}
              deleteSmurf={this.deleteSmurf}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
