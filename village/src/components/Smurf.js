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
        <strong>{this.props.height} tall</strong>
        <p>{this.props.age} smurf years old</p>

        {this.state.formToggle ? (
          <div>
            <EditSmurf>
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
            </EditSmurf>
            <div>
              <EditBTN onClick={this.editSmurf}>Submit Edit</EditBTN>
              <DeleteBTN onClick={this.deleteSmurf}>Delete Smurf</DeleteBTN>
            </div>
          </div>
        ) : null}
        <button onClick={this.toggleForm}>Toggle Form</button>
      </Smurf>
    );
  }
}
export default Smurf;
