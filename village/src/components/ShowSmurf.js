import React, {Component} from 'react';
import axios from 'axios';

class ShowSmurf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: this.props.smurfs,
      name: "",
      age: "",
      height: "",
      id: ""
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUpdate = (event) => {
    event.preventDefault()
    this.updateList( this.state.id, this.state.name, this.state.age, this.state.height);
  };

  updateList = (id, name, age, height) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, {
      name: name,
      age: age,
      height: height
    })
    .then( response => {
      this.setState({ smurfs: response.data, name: "", age: "", height: "" });
    })
    .catch( error => console.log(error));
  };

  render() {
    return(
      <div>Show Smurf</div>
    );
  }

};

export default ShowSmurf;