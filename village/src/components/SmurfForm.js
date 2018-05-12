import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      updated: false,
      id: '',
      formTittle: 'Add New Smurf to the Village',
      formButton: 'Add'
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.id !== '') {
      console.log("Id is " + this.state.id);
      this.updateSmurf();
    } else
      this.addSmurf();
  }

  addSmurf = () => {
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state)
    .then( (response) => {
      this.setState({updated: true, id: response.data[response.data.length-1].id})
    })
    .catch( (error) => {
      console.log(error);
    });

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurf = () => {
    const id = this.state.id;
    const smurf = {
      name: this.state.name, 
      age: this.state.age, 
      height: this.state.height}
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(() => {this.setState({updated: true, name:'', age:'', height:''})})
      .catch(err => console.log(err))
  }


  // componentWillMount() {
  //   this.setState( { formTittle: this.props.smurf.id ? "Update Smurf Information" : "Add New Smurf"} );
  //   this.setState( { formButton: this.props.smurf.id ? "Update" : "Add to the Village"} );
  // }
  componentDidMount() {
    const id = this.props.match.params.id;
    // this.fetchSmurf(id)
    if(id !== undefined) {
      console.log("I have this id " + id);
      this.fetchSmurf(id);
    } else
      console.log("no id")
  }

  fetchSmurf = (id) => {
    axios
        .get(`http://localhost:3333/smurfs/${id}`)
        .then(resp => {
            this.setState({
              id: resp.data.id,
              name: resp.data.name,
              age: resp.data.age,
              height: resp.data.height,
              formTittle: 'Update Smurf Information',
              formButton: 'Update'
            });
            console.log(this.state)
        })
        .catch(err => console.log(err))
}


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    {console.log(this.state.id)}
    return this.state.updated ? (
      <Redirect to={`/smurf/${this.state.id}`}/>
    ) : (
      <div className="SmurfForm">
        <h1>{this.state.formTittle}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{this.state.formButton}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
