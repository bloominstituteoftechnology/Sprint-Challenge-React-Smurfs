import React from 'react';
import axios from 'axios';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: false,
      editName: "",
      editAge: "",
      editHeight: "",
      Smurf: {}
    };
  }
// was meant to add styling with "editsmurf,editbutton,and delete" but ran out of time to make class components im still debugging my functionality
  toggleForm = () => {
    console.log(" working?");
    this.setState({
      formToggle: !this.state.formToggle
    });
  };

  deleteSmurf = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${this.props.id}`)
      .then(response => {
        console.log(response);
        this.props.handleData(response.data);
      })
      .catch(err => console.log(err));
  };

  handleSmurf = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editSmurf = () => {
    const editedSmurf = {
      name: this.state.editName,
      age: this.state.editAge,
      height: this.state.editHeight
    };
    axios
      .put(`http://localhost:3333/smurfs/${this.props.id}`, editedSmurf)
      .then(response => {
        console.log(response);
        this.props.handleData(response.data);
        this.setState({
          editName: "",
          editAge: "",
          editHeight: "",
          Smurf: {}
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Smurf>
        <h3>{this.props.name}</h3>
        <h2>{this.props.height} tall</h2>
        <p>{this.props.age} smurf years old</p>

        {this.state.formToggle ? (
          <div>
            <div>
              Name:
              <input
                type="text"
                placehoder="Smurf name"
                onChange={this.handleSmurf}
                name="editName"
                value={this.state.editName}
              />
              <br />
              Height:
              <input
                type="text"
                placehoder="friend email"
                onChange={this.handleSmurf}
                name="editHeight"
                value={this.state.editHeight}
              />
              <br />
              Age:
              <input
                type="text"
                placehoder="friend age"
                onChange={this.handleSmurf}
                name="editAge"
                value={this.state.editAge}
              />
            </div>
            <div>
              <button onClick={this.editSmurf}>Submit Edit</button>
              <button onClick={this.deleteSmurf}>Delete Smurf</button>
            </div>
          </div>
        ) : null}
        <button onClick={this.toggleForm}>Toggle Form</button>
      </Smurf>
    );
  }
}
export default Smurf;
