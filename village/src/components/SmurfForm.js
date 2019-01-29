
import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  componentDidMount() {
    //When this form is mounted in case of "update", we get an id for the smurf.
    // We save that id in state to be used during rendering.
    // In case of "post", it will be not defined.
    let id = this.props.match.params.id;
    this.setState({id:id})
  }

  addSmurf = event => {
    //event.preventDefault();
    // add code to create the smurf using the api
    const axios = require('axios');
    console.log("POST");
    let smurf = {name:this.state.name,age:this.state.age,height:this.state.height}
    axios.post("http://localhost:3333/smurfs",smurf)
        .then( response => {
          console.log("SEE posted",response);
          this.props.postHandler(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });


    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateSmurf = event => {
    //event.preventDefault();
    // add code to create the smurf using the api
    const axios = require('axios');
    console.log("Update");
    let smurf = {name:this.state.name,age:this.state.age,height:this.state.height}
    axios.put("http://localhost:3333/smurfs/" + this.state.id,smurf)
        .then( response => {
          console.log("SEE posted",response);
          this.props.updateHandler(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });


    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("Id = " + this.state.id);

    //We come here for "update" and "post" both
    //for "post", this.props.smurfs is not set, so it is undefined
    //for "update", this.props.smurfs is set, so it is valid array of smurfs
    let smurfs = this.props.smurfs; //Shortening the variable name
    let smurf = null; // Init smurf object that we are looking for.
    if (smurfs) {
      // We come inside in case of "update"
      console.log("Search smurfs...");
      for (let i=0; i < smurfs.length; i++){
        if (smurfs[i].id == this.state.id) {
             smurf = smurfs[i];
             console.log("Found smurf...");
             break;
        }
      }
    } else {
      //We come here for "post"
      console.log("No smurfs...");
    }

    //At this point, smurf is set to a valid object in case of "update"
    // but it is still null in case of "post"

    //Initialize placeholders of input that is used in case of "post"
    let namePlaceholder = "name";
    let agePlaceholder = "age";
    let heightPlaceholder = "height"

    //If it was update, then smurf would be non-null, so change the placeholder
    // to contain this smurf's data.
    if (smurf != null) {
      console.log("Found smurf");
      namePlaceholder = smurf.name;
      agePlaceholder = smurf.age;
      heightPlaceholder = smurf.height;
    }

    //Initialize handle func and actionText for botton to that of "post"
    let handlerFunc = this.addSmurf;
    let actionText = "Add to the village";
    //And change it to "update" if it is update
    if (smurfs != null) { //We get smurf only in case of update
      handlerFunc = this.updateSmurf;
      actionText = "Update this Smurf!"
    }

    return (
        <div className="SmurfForm">
          <form onSubmit={handlerFunc}>
            <input
                onChange={this.handleInputChange}
                placeholder={namePlaceholder}
                value={this.state.name}
                name="name"
            />
            <input
                onChange={this.handleInputChange}
                placeholder={agePlaceholder}
                value={this.state.age}
                name="age"
            />
            <input
                onChange={this.handleInputChange}
                placeholder={heightPlaceholder}
                value={this.state.height}
                name="height"
            />
            <button type="submit">{actionText}</button>
          </form>
        </div>
    );
  }
}

export default SmurfForm;