import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import IndividualSmurf from './components/IndividualSmurf'

const existingNote = {
  title: "",
  textBody: ""
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        title: "",
      textBody: "",
      },
      editingId: null,
      isEditing: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }


  handleInputChange = e => {
    this.setState({
      note: {
        ...this.state.note,
      [e.target.name]: e.target.value
    }
    });
  };

  addSmurf = () => {
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, this.state.note)
      .then(response => this.setState(response.data))
      .then(response => window.location.reload())
      
  }


editNote = () => {
  axios
  .put(`https://killer-notes.herokuapp.com/note/edit/${this.state.editingID}`, this.state.note)
  .then(response => {
    console.log(response.data)
    this.setState({
      notes: [...this.state.notes, response.data],
      editingId: null,
      note: existingNote,
    })
  })
  .then(response => window.location.reload())
}

toggleEditNoteForm = (ev, note) => {
  ev.preventDefault();
  this.setState({
    note: note,
    isEditing: true,
    editingID: note._id
  })
}



  deleteSmurf = (ev, _id) => {
    ev.preventDefault();
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`)
      .then(response => window.location.reload())
  };

 
  

  render() {
    return (
      <div className="App">
        <header className="navBar">
          <NavLink className="navLinks" to="/" exact>
            Home
          </NavLink>
          <NavLink className="navLinks" to="/village" exact>
            Village
          </NavLink>
          <NavLink className="navLinks" to="/smurf-form">
            Birth a Smurf
          </NavLink>
        </header>
        <div className="border" />

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              handleInputChange={this.handleInputChange}
              addSmurf={this.addSmurf}
              note={this.state.note}
              editingId={this.state.editingId}
              isEditing={this.state.isEditing}
              editNote={this.editNote}
            />
          )}
        />
        <Route exact path="/" render={props => <Home {...props} />} />

        <Route
          exact
          path="/village"
          render={props => (
            <Smurfs
              {...props}
              notes={this.state.notes}
              getSmurfById={this.getSmurfById}
              deleteSmurf={this.deleteSmurf}
              toggleEditNoteForm={this.toggleEditNoteForm}
            />
          )}
        />

        <Route
          path="/village/:id"
          render={props => <IndividualSmurf {...props} notes={this.state.notes}/>}
          
        />
      </div>
    );
  }
}

export default App;
