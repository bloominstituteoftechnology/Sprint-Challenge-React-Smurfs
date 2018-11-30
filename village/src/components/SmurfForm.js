import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
      })

      .catch(err => {
        console.log(err);
      });
  }
// THIS IS SO DUMB IM TELLING YUOU IT DOESNT UPDATE WTF COME ON COMPUTER
// its almost certainly cuz im not passing the state object in smurfform back up from child to parent so it doesn't update or something
// im telling you this is so dumb i hate you owl dude w/e your name is

  // addSmurf = event => {
  //   event.preventDefault();
    
  //     axios
  //       .post("http://localhost:3333/smurfs",
  //       {name: this.state.name,
  //         age: this.state.age,
  //         height: this.state.height}
  //       )
  //       .then(response => {
  //         console.log(response);
  //         this.setState({smurfs: response.data})

  //       })
  //       .catch(err => console.log(err));
  //       // this.props.addNewSmurf(event, {...this.state, id:this.state.id});
  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  //FUDGE YEAH SMURFING YES IT WORKS THANKS JON JON
  addSmurf = event => {
    event.preventDefault();
    this.props.addNewSmurf(this.state);
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
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <button type="submit">Add to the village</button>
          <Link to="/"><div className="home-button">Home</div></Link>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
